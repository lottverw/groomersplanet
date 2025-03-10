export default function Button({label, onClick, ...props}: {label: string, onClick: () => void, props: any}) {
  return <button className="bg-periwinkle-500 text-white p-2 rounded" onClick={onClick} {...props}>{ label }</button>;
}
