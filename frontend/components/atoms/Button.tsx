export default function Button({label, onClick, ...props}: {label: string, onClick: () => void, props: any}) {
  return <button className="bg-misty-rose-700 hover:bg-misty-rose-800 cursor-pointer text-white px-6 py-2 rounded-sm" onClick={onClick} {...props}>{ label }</button>;
}
