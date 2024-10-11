import HeaderBox from '@/components/HeaderBox'

// import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = () => {
  const loggedIn = {fistName :"sandalu Thushan"}


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
      
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.fistName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

   
    
        </header>

 
      </div>

  
    </section>
  )
}

export default Home