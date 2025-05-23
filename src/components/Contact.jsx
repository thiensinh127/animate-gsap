import AnimatedTitle from "./AnimateTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass, alt }) => (
  <div className={clipClass}>
    <img
      src={src}
      alt={alt}
      srcSet={`
        ${src} 400w,
        ${src} 800w,
        ${src} 1200w
      `}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
      loading="lazy"
      className="w-full h-auto object-cover"
    />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Left Image Group */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
            alt="contact-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40"
            alt="contact-2"
          />
        </div>

        {/* Right Image Group */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
            alt="contact-3"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
            alt="contact-4"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
