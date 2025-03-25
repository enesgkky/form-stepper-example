const Hero = () => {
    return (
      <div className="h-[80vh] flex items-center w-full justify-center">
        <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-flex px-4 py-2 text-base border rounded-full font-pj">
                Keşfet, Paylaş, İlham Ver
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                Gittiğin Yerleri Paylaş, Dünyaya İlham Ol!
              </h1>
              <p className="max-w-xl mx-auto mt-6 text-base leading-7 font-inter">
                Keşfettiğin şehirleri ve mekanları paylaş, gezginler için benzersiz bir veri kaynağı oluştur.
                Anılarını fotoğraflarla ölümsüzleştir ve diğer gezginlere ilham ver!
              </p>
  
              <div className="relative inline-flex mt-10 group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
  
                <a
                  href="/upload"
                  title="Paylaşmaya Başla"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Hemen Paylaş!
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Hero;
  