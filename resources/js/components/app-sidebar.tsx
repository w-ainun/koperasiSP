import { Link } from '@inertiajs/react';
import { 
    LayoutGrid, 
    Users, 
    Wallet, 
    Landmark, 
    PieChart, 
    FileText 
} from 'lucide-react';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    { title: 'Dashboard', href: dashboard(), icon: LayoutGrid },
    { title: 'Manajemen Anggota', href: '/members', icon: Users },
    { title: 'Manajemen Simpanan', href: '/savings', icon: Wallet },
    { title: 'Manajemen Pinjaman', href: '/loans', icon: Landmark },
    { title: 'Manajemen SHU', href: '/shu', icon: PieChart },
    { title: 'Laporan', href: '/reports', icon: FileText },
];

export function AppSidebar() {
    return (
        <Sidebar 
            collapsible="icon" 
            variant="inset" 
            /* !bg-[#00A99D]: Memaksa Background Teal
               text-white: Memaksa semua teks di dalamnya jadi putih
            */
            className="!bg-[#00A99D] border-none shadow-2xl text-white"
            style={{ backgroundColor: '#00A99D' }} 
        >
            <SidebarHeader className="!bg-[#00A99D] pt-6">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} className="flex items-center gap-3">
                                {/* Logo Putih agar Kontras */}
                                <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-white text-[#00A99D] shadow-lg">
                                    <span className="text-xl font-bold">M</span>
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-['Playfair_Display'] text-lg font-bold text-white">
                                        Mitra<span className="text-teal-200">ya</span>
                                    </span>
                                    <span className="text-[10px] font-medium text-teal-50/80 uppercase tracking-widest">Koperasi</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            {/* Navigasi Utama */}
            <SidebarContent className="!bg-[#00A99D] px-2 pt-4">
                <div className="
                    [&_svg]:!text-white 
                    [&_span]:!text-white 
                    [&_nav]:!text-white
                    [&_button:hover]:bg-white/20
                    [&_[data-active=true]]:bg-white/20
                ">
                    <NavMain items={mainNavItems} />
                </div>
            </SidebarContent>

            <SidebarFooter className="!bg-[#00A99D] border-t border-white/20 pt-4">
                <div className="[&_span]:!text-white [&_svg]:!text-white">
                    <NavUser />
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}