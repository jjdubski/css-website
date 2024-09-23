import Entry from "@/app/types/entry"
import Link from 'next/link';

const renderEventPreview = (e: Entry) => {
    return (
        <Link href={`/events/${e.slug}`}>
            <div className="block bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden shadow-md text-center">
                {e.coverImage ? (
                    <div className="relative pb-56 overflow-hidden">
                        <img 
                            src={e.coverImage} 
                            alt={`${e.title} cover image`} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ) : (
                    <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
                        Placeholder Image
                    </div>
                )}
                <div className="p-4">
                    <h2 className="text-sm font-semibold text-gray-800 break-words">{e.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        {new Date(e.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default renderEventPreview;
  