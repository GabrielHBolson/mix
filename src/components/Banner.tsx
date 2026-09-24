export default function Banner() {
  return (
    <section className="bg-red text-white">
      <div className="container-site flex flex-col items-start gap-6 py-10 sm:py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Portal do Aluno
          </h1>
          <p className="mt-3 text-white/85">
            Escolha a sua plataforma e comece a estudar.
          </p>
        </div>
        <img
          src="/images/logo_instituto_mix.png"
          alt="Logo completa do Instituto Mix"
          className="w-full max-w-xs sm:max-w-sm md:max-w-[320px]"
        />
      </div>
    </section>
  )
}