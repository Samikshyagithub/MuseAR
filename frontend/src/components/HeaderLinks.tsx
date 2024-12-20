export default function HeaderLinks({ link, href }: { link: string, href: string }) {
    return <a className="flex gap-2 items-center" href={`${href}`} >
        <span>{link}</span>
        <i className="fa-solid fa-chevron-down text-sm"></i>
    </a >
}
