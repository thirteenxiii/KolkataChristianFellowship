import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import contentMap from '@/data/contentMap.json';

const slugMap: Record<string, string> = {
  'vision': 'visionmission',
  'principles': 'foundation',
  'faith': 'statement',
  'hop': 'hour_of_power',
  'kids': 'kids_church',
  'tot': 'teens_on_track',
  'freedom': 'freedomchurch',
  'college': 'college_and_career',
  'mentorship': 'bengali',
  'partner': 'partners'
};

export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const path = resolvedParams.slug.join('/');
  
  // Try to find the exact content key based on the path, or fallback to the mapped version
  const contentKey = slugMap[path] || path;
  
  // @ts-ignore - dynamic key access
  const pageContent = contentMap[contentKey];

  const title = pageContent?.title || resolvedParams.slug[resolvedParams.slug.length - 1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Custom components for React Markdown
  const components = {
    h1: ({node, ...props}: any) => <h1 className="text-3xl font-serif font-bold text-stone-800 mt-8 mb-4" {...props} />,
    h2: ({node, ...props}: any) => <h2 className="text-2xl font-serif font-bold text-stone-800 mt-6 mb-4" {...props} />,
    h3: ({node, ...props}: any) => <h3 className="text-xl font-serif font-bold text-stone-800 mt-6 mb-3" {...props} />,
    p: ({node, ...props}: any) => <p className="text-stone-700 leading-relaxed mb-4" {...props} />,
    ul: ({node, ...props}: any) => <ul className="list-disc pl-6 text-stone-700 mb-4" {...props} />,
    ol: ({node, ...props}: any) => <ol className="list-decimal pl-6 text-stone-700 mb-4" {...props} />,
    li: ({node, ...props}: any) => <li className="mb-2" {...props} />,
    a: ({node, ...props}: any) => <a className="text-stone-600 hover:text-stone-900 underline underline-offset-2" {...props} />,
    blockquote: ({node, ...props}: any) => <blockquote className="border-l-4 border-stone-300 pl-4 italic text-stone-600 my-4" {...props} />,
    img: ({node, src, alt, ...props}: any) => {
      // If it's a relative legacy path, try to use it, else let it be
      return (
        <span className="block my-8 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
          <img src={src} alt={alt || 'Image'} className="w-full h-auto" {...props} />
        </span>
      );
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-md bg-stone-200">
          {/* Using standard unoptimized img tag for external stock placeholder to avoid config hassle */}
          <img 
            src={`https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&q=80`} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white text-center px-4 drop-shadow-md">{title}</h1>
          </div>
        </div>
        
        <div className="prose prose-stone lg:prose-xl mx-auto font-sans bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
          {pageContent && pageContent.markdown ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {pageContent.markdown}
            </ReactMarkdown>
          ) : (
            <>
              <p className="text-xl text-stone-600 mb-6 font-semibold">
                Welcome to the {title} section of Kolkata Christian Fellowship.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                We are dedicated to our mission of Encountering the Saviour, Equipping the Saints, and Encouraging Service. 
                This area hosts information related to <strong>{title}</strong>.
              </p>
              <p className="text-stone-700 leading-relaxed mb-8">
                Our team is currently finalizing the content for this section, migrating information from our legacy site. We appreciate your patience!
              </p>
            </>
          )}
          
          <div className="border-t border-stone-200 pt-8 mt-8">
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">Get Involved</h3>
            <p className="text-stone-700 leading-relaxed">
              If you have any questions or wish to learn more about {title}, please don't hesitate to reach out to us during our Sunday services or via our contact channels.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
