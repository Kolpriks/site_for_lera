import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
    const handlePhoneClick = () => {
        window.location.href = 'tel:+79057122195';
    };

    const handleWhatsappClick = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=79057122195';
    };

    const handleTelegramClick = (username) => {
        window.location.href = `https://t.me/${username}`;
    };

    return (
        <div className={styles.footerWrap} id='footer'>
            <div className={styles.footerContainer}>
                <div className={styles.footer}>
                    <h2>Связаться с нами:</h2>
                    <p className={styles.footerText} onClick={() => handleTelegramClick('Croha007')}><FaTelegramPlane size={15} /> @Croha007</p>
                    <p className={styles.footerText} onClick={handlePhoneClick}><FaPhoneAlt size={15}/> 8-(905)-712-21-95</p>
                    <p className={styles.footerText}><IoIosMail size={15}/> 0_cheese_0@mail.ru</p>
                    <p className={styles.footerText} onClick={handleWhatsappClick}><FaWhatsapp size={15}/> 8-(905)-712-21-95</p>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.footer}>
                    <h2>Другие контакты:</h2>
                    <p className={styles.footerText}>Оператор: <br/></p> <p className={styles.footerText} onClick={() => handleTelegramClick('istomin_portfolio')}><FaTelegramPlane size={15} /> @istomin_portfolio</p>
                    <p className={styles.footerText}>Сайт сделал: <br/></p><p className={styles.footerText} onClick={() => handleTelegramClick('Kolpriks')}><FaTelegramPlane size={15} /> @Kolpriks</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
