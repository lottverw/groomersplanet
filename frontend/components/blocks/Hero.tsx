import Button from '../atoms/Button';

export default function Banner({ title, text, button, image }: { title: string, text: string, button: string, image: string }) {
  const bgImageClass = ` bg-stone-300`;

  return (
    <section>
    <div className={`flex flex-col items-start justify-center p-10 ${bgImageClass} rounded-sm h-[500px]`}>
      <h1 className="text-4xl font-light mb-4">{title}</h1>
        <p className="text-lg max-w-2xl mb-6">{text}</p>
        <Button label={button} />
      </div>

    </section>
  );
}