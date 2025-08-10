import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const SellerMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='Add Course'
        address='addCourse'
      />
   
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Course'
        address='manageCourse'
      />
    </>
  )
}

export default SellerMenu
