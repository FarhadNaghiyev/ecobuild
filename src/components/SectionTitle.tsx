


export interface SectionTitleProps{
    title:string
}

function SectionTitle({title}:SectionTitleProps) {
  return (
    <h3 className="flex items-center gap-3 text-black-5 text-[clamp(1.25rem,4vw,2rem)] font-medium">
        <div className="flex items-center justify-center bg-secondary-color h-4 w-4 md:h-6 md:w-6 rounded-full">
            <div className="bg-primary-color h-3 w-3 md:h-5 md:w-5 rounded-full"></div>
        </div>
        {title}
    </h3>
  )
}

export default SectionTitle
