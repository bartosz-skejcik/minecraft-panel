import Link from "next/link";

type Props = {
    navigation: any[];
};

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar({ navigation }: Props) {
    return (
        <>
            <aside
                id="default-sidebar"
                className="w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-800 rounded-lg">
                    <ul className="space-y-2 font-medium">
                        {navigation.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="flex items-center p-2 rounded-lg text-white hover:bg-neutral-700 group"
                                    >
                                        <item.icon className="w-6 h-6 mr-4 text-neutral-400 group-hover:text-neutral-300" />
                                        <span className="ml-3">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </aside>
        </>
    );
}
