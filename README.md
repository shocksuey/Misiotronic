Misiotronica 🛠🛠:
<br />
<strong>- Framework utilizado: Next js:</strong>
<br />
Modo de desarrollo: <strong><em>$ npm run dev</em></strong>
<br />
<br />
<strong>🔹 Nav Lateral:</strong> el nav lateral se encuentra disponible en resoluciones correspondientes a smartphones.
<br />
<br />
<strong>🔹 Routing:</strong> las rutas se definen con directorios dentro de la carpeta "app". Para que sean rutas deben incluir tambien un componente funcional React con el nombre "page.js". La navegacion entre paginas se realiza utilizando el componente <Link />, tambien utilice la nueva version de next router (se puede observar en layout.js): next/navigation. *
<br />
 https://nextjs.org/docs/pages/building-your-application/routing  
<br />
<br />
<strong>🔹 Filtro/Buscador de productos:</strong> el buscador es 100% funcional, pero la api utilizada tiene muy pocos productos (los 9 que se exponen en la seccion "Store"). Por lo tanto, para que el filtrado tenga efecto se deben ingresar datos que concuerden con alguno de los 9 productos listados. Ej.: "iphone", "samsung" .  
<br />
<br />
<strong>🔹 Error personalizado:</strong> en next los errores se pueden manejar de distintas maneras. Elegi la utilizacion del directorio "pages" con los archivos especificados de la siguiente forma. Para modificar el template del error 404, se creara un archivo de la siguiente maneara:  src>pages>404.js .
<br />
https://nextjs.org/docs/pages/building-your-application/routing/custom-error
<br />
<br />
<strong>*</strong> Next/navigation : por defecto todos los componentes en next js son server components. Para utilizar client components se debe utilizar la sentencia <strong>'use client'</strong> al principio del documento. Dentro de los componentes de cliente no se puede utilizar next/router, sino que debe de importarse el paquete navigation para utilizar los hooks useRouter y usePathname:
<br>
import { useRouter, usePathname } from 'next/navigation'