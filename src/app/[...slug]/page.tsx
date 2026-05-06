import React from 'react';
import Image from 'next/image';

export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const path = resolvedParams.slug.join('/');
  const title = resolvedParams.slug[resolvedParams.slug.length - 1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

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
