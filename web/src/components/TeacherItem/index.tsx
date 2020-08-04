import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/43671640?s=460&u=8c5459ef6298a9b8cfa5829daa34598767ebcbfb&v=4" alt="Matheus H. S. Almeida" />
                <div>
                    <strong>Matheus H. S. Almeida</strong>
                    <span>Estrutura de Dados 1</span>
                </div>
            </header>

            <p>
                Pokem ipsum dolor sit amet Tentacool Zebstrika Gligar Paras Lickitung Slowbro.
                <br /> <br />
                Brock Glacier Badge Slowpoke Shuppet Bouffalant Keldeo Pidgeot. Celadon City Togepi Fire Qwilfish Luvdisc Burmy Escape Rope. Red Teleport Rotom MysteryBerry Muk Luvdisc Grumpig. Hoenn Terrakion Froslass Delibird Earthquake Seviper Hydreigon.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;