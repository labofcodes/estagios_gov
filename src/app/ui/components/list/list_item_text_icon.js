import Image from 'next/image'

export default function List_item_text_icon ( {icon, text, modal} ) {
  return (
    <div className="flex gap-2">
        <div>{icon}</div>
        <p>{text} {modal}</p>
        
    </div>
  );
}