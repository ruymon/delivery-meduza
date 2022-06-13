import { useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/app');
    }, 7000);
  }
  , []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        <div className={styles.icon}>
          <FiCheck />
        </div>

        <h1>Pedido realizado!</h1>
        <p>Agora é só esperar! Seu pedido está sendo preparado e logo sairá para entrega. <br />Você será redirecionado automaticamente após 10 segundos.</p>

      </div>
    </div>
  );
};
