import Image  from 'next/image';
import Styles from '../../../styles/page.module.scss';
import LogoImg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

import Link  from 'next/link';

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Faça seu cadastro agora', 
}

export default function SignUp() {
  return (
    <>
      
          <div className={ Styles.containerCenter }>
            <Image src={ LogoImg } alt='Logo Sujeito Pizzaria'/>
        
      

            <div className={ Styles.login }>

              <h1 className={ Styles.text }> Criando sua conta </h1>

              <form>

              <Input 
                    placeholder='Digite seu nome'
                    type='text'
              />



                <Input 
                    placeholder='Digite seu email'
                    type='text'
              />

                <Input placeholder='Digite sua senha'
                    type='password'
                />

              <Button
                type='submit'
                loading={false}
                >
                  Cadastrar
                </Button>
              </form>

              <Link href="/" className={ Styles.text }>Já possui uma conta? Faça login</Link>
              

            </div>
         </div>
    </>
  );
}

