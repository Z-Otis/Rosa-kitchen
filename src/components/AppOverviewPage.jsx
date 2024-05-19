import '../App.css'
import Meals from './Meals'
import Search from './Search'
import Favorites from './Favorites'
import Modal from './Modal'
import { useGlobalContext } from '../context'

function AppOverviewPage() {
 const {showModal, favorites} = useGlobalContext();

  return (
    <div>
       <Search />
      {favorites.length > 0 && <Favorites />}
        <Meals />
      {showModal && <Modal />}
      </div>
  )
}

export default AppOverviewPage
