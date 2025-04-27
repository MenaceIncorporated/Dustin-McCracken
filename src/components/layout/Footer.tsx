import Image from 'next/image';

<footer className="footer">
  {/* ...existing footer content... */}
  <div className="mt-8 flex flex-col items-center justify-center">
    <span className="text-sm text-gray-500 mb-2">Powered by</span>
    <Image src="/exp-logo-oip.jpg" alt="eXp Realty Logo" width={100} height={32} />
  </div>
  {/* ... existing code ... */}
</footer> 