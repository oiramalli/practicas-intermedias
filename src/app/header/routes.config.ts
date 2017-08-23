interface RouteInfo {
  path: string;
  title: string;
  priority: number;
  top: boolean;
  current: boolean;
}

export const Routes: RouteInfo[] = [
    {
      path: 'home',
      title: 'Inicio',
      priority: 0,
      top: true,
      current: false
    },
    {
      path: 'about',
      title: 'Nosotros',
      priority: 0,
      top: true,
      current: false
    },
    {
      path: 'informe-1',
      title: 'Informe 1',
      priority: 0,
      top: false,
      current: false
    },
    {
      path: 'informe-2',
      title: 'Informe 2',
      priority: 0,
      top: false,
      current: false
    },
];
