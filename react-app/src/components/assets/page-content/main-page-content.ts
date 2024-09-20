import { button } from "framer-motion/client";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface ContentInterface {
    mainContent: {
        title: string,
        highlight: string,
        description: string,
        icon: string
    },

    mainContent2: {
        title: string,
        highlight: string,
        description: string,
        icon: string
    },

    mainContent3: {
        title: string,
        highlight: string,
        description: string,
        icon: string,
        button: boolean
        link: string
    }

}

const content: ContentInterface = {
    mainContent:{
        title: "Seja bem vindo ao",
        highlight: "Letra a Letra",
        description: "Aqui você poderá se divertir enquanto aprende conhecimentos aleatórios e compete para chegar ao topo dos rankings",
        icon: "file-icons:owl"
    },
    mainContent2: {
        title: "Aqui você poderá competir pelos",
        highlight: "RANKINGS",
        description: "Além de aprender muita coisa inutil, enquanto se diverte",
        icon: "ph:ranking-fill"
    },
    mainContent3: {
        title: "Chega de perder tempo",
        highlight: "Vamos lá",
        description: "Comece agora mesmo a competir e aprender",
        icon: "material-symbols:person-play-outline-rounded",
        button: true,
        link: "/login"

    }
}

export default content;