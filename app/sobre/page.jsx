import "./sobre.css";
import livro1 from "../../public/ÉAssimQueAcaba.png";
import livro2 from "../../public/BienalDoLivro2024.png"
import livro3 from "../../public/PostsIts.png"
import livro4 from "../../public/AHipoteseDoAmor.png"
import livro5 from "../../public/CuriosidadesSobreColleenHoover.png"
import livro6 from "../../public/BibliotecaDaMeiaNoite.png"
import logo from "../../public/logo.png";
import Post from "../../components/Post";
import Header from "../../components/Header";

export const metadata = {
    title: "Home 🌷📚",
};

export default function Sobre() {
    return (
        <div className="container">
            <Header image={logo} title="Tulips and Books 🌷📚" />
            <div className="content" >
                <Post url="https://www.instagram.com/p/C4LbjV4Onu0/?igsh=b294dnJtYW9kZHEz" image={livro1} title="É Assim Que Acaba 🌸" text="Entre e conheça É Assim Que Acaba. Uma história que vai mexer com suas emoções e refletir sobre os limites do amor e da superação. 📑" />
                <Post url="https://www.instagram.com/p/C_vN4NHu8YN/?igsh=ZWFyMDJ0dXNqOWt3" image={livro2} title="Bienal do Livro 2024 📚" text="Entre e explore tudo o que a Bienal do Livro tem a oferecer: uma verdadeira celebração da literatura, com lançamentos, autores e muito mais! 💌" />
                <Post url="https://www.instagram.com/p/C7hB3eiu3wT/?igsh=aTFncjlreDZ0YzZz" image={livro3} title="Post Its 📖" text="Descubra as melhores dicas e aprenda como usar de forma eficiente! Navegue pelos nossos Posts It’s e comece a aplicar as ideias! ✨" />
            </div>
            <div className="content" >
                <Post url="https://www.instagram.com/p/C3VZnE0ucih/?igsh=NmV5emtmZnJycW5p" image={livro4} title="A Hipótese do Amor 🧪" text="Em A Hipótese do Amor, contém ciência e romance, onde uma física e seu colega se veem desafiados por uma atração inesperada. Uma comédia romântica inteligente e cativante! 📚" />
                <Post url="https://www.instagram.com/p/C2xE12WuqhZ/?igsh=ZWh2b3YzMG12aDhv" image={livro5} title="Colleen Hoover 🧐" text="Conheça Colleen Hoover, autora de diversos romances que cativam leitores ao redor do mundo. Suas histórias sobre amor e superação emocionam com reviravoltas inesquecíveis. 📚" />
                <Post url="https://www.instagram.com/p/C2QasUVpf8o/?igsh=MWl1ZG5lcHluMDA3aA==" image={livro6} title="A Biblioteca da Meia-Noite 📗" text="Em A Biblioteca da Meia-Noite, Nora explora vidas alternativas para descobrir o verdadeiro sentido da felicidade. Uma reflexão sobre escolhas e segundas chances. ✨" />
            </div>
        </div>
    );
}