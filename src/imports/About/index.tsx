export default function About() {
  return (
    <div className="[word-break:break-word] bg-white font-['ABC_Diatype_Plus_Variable_Unlicensed_Trial:Regular',sans-serif] font-normal not-italic relative size-full text-[16px] text-black" data-name="About">
      <p className="absolute inset-[0.48%_82.92%_98.59%_0.97%] leading-[normal]" style={{ fontVariationSettings: '"MONO" 0, "wdth" 100' }}>
        About
      </p>
      <p className="absolute inset-[0.48%_1.04%_98.59%_82.85%] leading-[normal] text-right" style={{ fontVariationSettings: '"MONO" 0, "wdth" 100' }}>
        (close)
      </p>
      <div className="absolute h-[710px] leading-[0] left-[45px] top-[47px] w-[387px] whitespace-pre-wrap" style={{ fontVariationSettings: '"MONO" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">{`Hi! `}</p>
        <p className="leading-[normal] mb-0">{`      My name is Petra, I come from Zagreb, where I completed a Master's degree in Visual Communications at the Faculty of Architecture, University of Zagreb. I earned my Bachelor's degree from the Faculty of Graphic Arts, where I further developed my knowledge of graphic technology, editorial design, and print production.`}</p>
        <p className="leading-[normal]">{`      I have participated in group exhibitions and contributed to the production and installation of exhibition projects. My work spans graphic design, film, and photography, and I recently presented my short film at a public screening at Kinoteka. I have a particular interest in the social dimension of design, focusing on mental health and the use of visual communication as a tool for social engagement.`}</p>
      </div>
      <div className="absolute h-[41px] leading-[0] left-[454px] top-[341px] w-[387px]" style={{ fontVariationSettings: '"MONO" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Zagreb, Croatia</p>
        <p className="leading-[normal]">petra.pavlic3@gmail.com</p>
      </div>
    </div>
  );
}