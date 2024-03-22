import Link from "next/link";

function BreadCrumb({ list = [] }) {
  return (
    <div className="py-7 bg-white text-[#999] text-[14px] rounded-lg container mx-auto px-5">
      {list.map((e, i) => (
        <Link className={`${e.style}`} key={i} href={e.to}>
          {e.text}
        </Link>
      ))}
    </div>
  );
}

export default BreadCrumb;
