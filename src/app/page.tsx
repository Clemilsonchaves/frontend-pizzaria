
import Image  from 'next/image';
import Styles from '../../styles/page.module.scss';
import LogoImg from '../../public/logo.svg';

import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';



import Link  from 'next/link';

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'SujeitoPizzaria - Página de Login', 
}

export default function Home() {
  

  
  

  return (
    <>
      
          <div className={Styles.containerCenter}>
            <Image src={LogoImg} alt='Logo Sujeito Pizzaria'/>
        
      

            <div className={Styles.login}>
              <form>
                <Input placeholder='Digite seu email'
                    type='text'
              />

                <Input placeholder='Digite sua senha'
                    type='password'
                />

              <Button
                type='submit'
                loading={false}
                >
                  Acessar
                </Button>
              </form>

              <Link href="/signup" className={ Styles.text }> Já possui sua conta? Cadastre-se</Link>
              

            </div>
         </div>
    </>
  );
}

