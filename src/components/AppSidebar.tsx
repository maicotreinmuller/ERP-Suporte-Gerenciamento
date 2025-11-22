import { Users, ClipboardList, LayoutDashboard, ShoppingCart, Calendar, Database } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
const menuItems = [{
  path: "/",
  icon: LayoutDashboard,
  label: "Dashboard"
}, {
  path: "/clients",
  icon: Users,
  label: "Clientes"
}, {
  path: "/service-orders",
  icon: ClipboardList,
  label: "Ordens de Serviço"
}, {
  path: "/purchases",
  icon: ShoppingCart,
  label: "Compras"
}, {
  path: "/schedule",
  icon: Calendar,
  label: "Agenda"
}, {
  path: "/data-management",
  icon: Database,
  label: "Gerenciar Dados"
}];
export function AppSidebar() {
  const {
    state
  } = useSidebar();
  const collapsed = state === "collapsed";
  return <Sidebar collapsible="icon">
      
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => {
              const Icon = item.icon;
              return <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild size="lg">
                      <NavLink to={item.path} className="flex items-center gap-3" activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium">
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        {!collapsed && <span>{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>;
            })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>;
}
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}