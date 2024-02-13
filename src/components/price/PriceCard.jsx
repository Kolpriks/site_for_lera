import React, { Component } from 'react';
import styles from '../../styles/Price.module.css';
import MainButton from '../buttons/MainButton';

class PriceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false
        };
    }

    handleModalToggle = (modalState) => {
        this.setState({ modalActive: modalState });
    }

    render() {
        const { name, price, typeOfCard, typeOfButton } = this.props;
        const { modalActive } = this.state;
        
        const cardClassName = typeOfCard === 'orange' ? styles.orange : styles.white;

        return (
            <div className={`${styles.priceCardContur}`}>
                <div className={`${styles.priceCardText} ${cardClassName}`}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.price}>{price}</p>
                    <MainButton onModalToggle={this.handleModalToggle} text='Заявка' type={typeOfButton} />
                </div>
            </div>
        );
    }
}

export default PriceCard;
