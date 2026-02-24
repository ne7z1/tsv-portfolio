import Link from "next/link";

// ДОБАВИЛИ prop `image`
export default function CaseCard({ title, tags, image, href = "#" }) {
  return (
    <Link 
      href={href} 
      className="group flex flex-col w-full bg-white rounded-lg overflow-hidden cursor-pointer border border-transparent hover:border-[#CBD5E1]/50 transition-all duration-300"
    >
      
      {/* 1. Блок с картинкой */}
      <div className="w-full aspect-4/3 bg-[#E2E8F0] overflow-hidden relative">
        <img 
          src={image || "/image.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* 2. Блок с текстом */}
      <div className="flex flex-col gap-4 p-6 lg:p-m">
        
        {/* Заголовок + Стрелки */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="
            text-h3 font-medium text-text-main leading-tight
            relative w-fit pb-1
            transition-colors duration-200 group-hover:text-btn-primary-hover
            after:absolute after:left-0 after:bottom-0
            after:h-[2px] after:bg-btn-primary-hover
            after:w-0 group-hover:after:w-full
            after:transition-all after:duration-200 after:ease-in-out">
            {title}
          </h3>
          
          <div className="transition-transform duration-200 group-hover:translate-x-2 pt-1 shrink-0">
            <img src="/ArrowRight.svg" alt="Arrow" width={24} height={24} className="block group-hover:hidden" />
            <img src="/ArrowRightBlue.svg" alt="Arrow Blue" width={24} height={24} className="hidden group-hover:block" />
          </div>
        </div>

        {/* 3. Блок с тегами */}
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {tags.map((tag, index) => (
            <span key={index} className="text-caption font-medium text-text-main/70 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>

      </div>
      
    </Link>
  );
}