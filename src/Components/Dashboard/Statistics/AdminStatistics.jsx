import { FaUserAlt, FaDollarSign, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'

const AdminStatistics = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mt-12 max-w-7xl mx-auto">
        {/* Statistic Cards */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Sales Card */}
          <div className="relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6 pt-12">
            <div className="absolute -top-6 left-6 grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-lg shadow-orange-500/40">
              <FaDollarSign className="w-7 h-7" />
            </div>
            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
            <h4 className="mt-1 text-3xl font-bold text-gray-900">$12,345</h4>
            <div className="flex items-center gap-2 text-green-600 mt-2 text-sm font-semibold">
              <FaArrowUp />
              <span>+8.2% since last month</span>
            </div>
            <p className="mt-2 text-gray-400 text-xs italic">
              Revenue is steadily increasing due to higher sales volume.
            </p>
          </div>

          {/* Total Orders */}
          <div className="relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6 pt-12">
            <div className="absolute -top-6 left-6 grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/40">
              <BsFillCartPlusFill className="w-7 h-7" />
            </div>
            <p className="text-sm font-medium text-gray-500">Total Orders</p>
            <h4 className="mt-1 text-3xl font-bold text-gray-900">1,234</h4>
            <div className="flex items-center gap-2 text-red-600 mt-2 text-sm font-semibold">
              <FaArrowDown />
              <span>-3.1% since last week</span>
            </div>
            <p className="mt-2 text-gray-400 text-xs italic">
              Orders dipped slightly, consider marketing push.
            </p>
          </div>

          {/* Total Plants */}
          <div className="relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6 pt-12">
            <div className="absolute -top-6 left-6 grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-lg shadow-pink-500/40">
              <BsFillHouseDoorFill className="w-7 h-7" />
            </div>
            <p className="text-sm font-medium text-gray-500">Total Plants</p>
            <h4 className="mt-1 text-3xl font-bold text-gray-900">325</h4>
            <div className="flex items-center gap-2 text-green-600 mt-2 text-sm font-semibold">
              <FaArrowUp />
              <span>+12% since last quarter</span>
            </div>
            <p className="mt-2 text-gray-400 text-xs italic">
              New species added and stock levels healthy.
            </p>
          </div>

          {/* Users Card */}
          <div className="relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6 pt-12">
            <div className="absolute -top-6 left-6 grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-lg shadow-green-500/40">
              <FaUserAlt className="w-7 h-7" />
            </div>
            <p className="text-sm font-medium text-gray-500">Total Users</p>
            <h4 className="mt-1 text-3xl font-bold text-gray-900">1,025</h4>
            <div className="flex items-center gap-2 text-green-600 mt-2 text-sm font-semibold">
              <FaArrowUp />
              <span>+5.6% since last month</span>
            </div>
            <p className="mt-2 text-gray-400 text-xs italic">
              User base continues to grow steadily.
            </p>
          </div>
        </div>

        {/* Summary / Insights */}
        <div className="mb-8 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Monthly Summary</h3>
          <p className="text-gray-600 leading-relaxed">
            This month, total revenue saw a healthy increase thanks to a surge in orders during the
            promotional campaign. Despite a slight dip in order count last week, customer retention
            rates remain strong. Inventory levels are stable, and user registrations continue to grow
            at a steady pace.
          </p>
        </div>

        {/* Charts & Calendar Section */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Sales Bar Chart Placeholder */}
          <div className="xl:col-span-2 relative flex flex-col bg-white rounded-xl shadow-md p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-700">Sales Overview</h3>
            <div className="flex-grow flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-400 text-xl italic select-none">
              Chart Placeholder
            </div>
          </div>

          {/* Calendar Placeholder */}
          <div className="relative flex flex-col bg-white rounded-xl shadow-md p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-700">Calendar</h3>
            <div className="flex-grow flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-400 text-xl italic select-none">
              Calendar Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminStatistics
