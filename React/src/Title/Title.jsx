
import PropTypes from 'prop-types';
import styles from './styles.module.css'

export default function Title({children}){
    return (
        <h2 className={styles.wrapper}>{children}</h2> // Usando children , posso usar qualquer props no outro lado
    )
}

Title.propTypes = {
    children: PropTypes.string.isRequired,

  };