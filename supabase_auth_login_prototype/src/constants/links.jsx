
import {TbLayoutDashboardFilled} from "react-icons/tb";
import {FaUsers, FaUsersCog, FaCogs, FaList    } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa6";

import { HiUserGroup } from "react-icons/hi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

import { MdNumbers } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export const dashboardLinks = [
    {
        type: "link",
        label: "Dashboard",
        title: "Bienvenido",
        icon: TbLayoutDashboardFilled,
        path: "dashboard",
    },
    {
        type: "link",
        label: "Administración",
        title: "Administración",
        icon: FaUsersCog,
        path: "administracion",
    },
    {
        type: "link",
        label: "Usuarios",
        title: "Usuarios",
        icon: FaUsers,
        path: "usuarios",
    },
    {
        type: "link",
        label: "Sensores",
        title: "Sensores",
        icon: FaSatelliteDish  ,
        path: "sensores",
    },
    {
        type: "link",
        label: "Reportes",
        title: "Reportes",
        icon: FaList,
        path: "reportes",
    },
    {
        type: "link",
        label: "Configuración",
        title: "Configuración",
        icon: FaCogs,
        path: "configuracion",
    },

];

export const homeLinks = [
    {
        label: "Home",
        uri: "#",
    },
    {
        label: "Sobre Nosotros",
        uri: "/nosotros",
    },
    {
        label: "Articulos",
        uri: "#",
        subitems: [
            {
                label: "React",
                uri: "#",
            },
            {
                label: "JavaScript",
                uri: "#",
            },
            {
                label: "Next.js",
                uri: "#",
            },
        ],
    },
    {
        label: "Contact",
        uri: "#",
    },
    // {
    //     label: "Nuestra Mision",
    //     uri: "#",
    // },

]

export const footerLinks = [

    {
        label: "Home",
        uri: "#",
        icon:IoHomeSharp,

    },

    {
       label: "Explore",
       uri: "#",
       icon: MdOutlineTravelExplore,
    },

    {
        label:"About",
        uri:"#",
        icon: HiUserGroup,
    },

    {
        label: "Contact",
        uri: "#",
        icon: MdPhoneInTalk,
    },

]

export const footerFollowus = [

    {
        label: "Facebook",
        uri: "#",
        icon:FaFacebook,
    },

    {
        label: "Twitter",
        uri: "#",
        icon:FaTwitter,
    },

    {
        label:"GitHub",
        uri:"#",
        icon:TbBrandGithubFilled,

    },


]
export const footerContactus = [

    {
        label: "+51 996 262 037",
        uri: "#",
        icon:MdNumbers,
    },

    {
        label: "2022207020.est@unaj.edu.pe",
        uri: "#",
        icon:MdOutlineMailOutline,
    },

    {
        label:"Puno, Perú",
        uri:"#",
        icon:FaMapMarkerAlt,
    },


]