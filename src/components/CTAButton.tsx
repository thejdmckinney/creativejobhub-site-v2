interface CTAButtonProps {
  text: string;
  url: string;
  style: 'primary' | 'secondary' | 'success';
}

export default function CTAButton({ text, url, style }: CTAButtonProps) {
  const styleClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-gray-200',
    success: 'bg-green-600 hover:bg-green-700 text-white shadow-green-200',
  };

  const isExternal = url.startsWith('http');

  return (
    <div className="my-8 text-center">
      <a
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`
          inline-block px-8 py-4 rounded-lg font-bold text-lg
          transition-all duration-300 ease-in-out
          hover:shadow-xl hover:-translate-y-1
          ${styleClasses[style]}
        `}
      >
        {text}
      </a>
    </div>
  );
}
