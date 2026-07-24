import { NavLink } from "react-router-dom";
import "./user.css";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsBagDash } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GoGear } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";

const user = () => {
  return (
    <>
      <div className="sidebar">
        <h2 className=" font-bold text-3xl">Admin</h2>

        <NavLink className="flex gap-3" to="/dashboard">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </svg>
          </span>
          Dashboard
        </NavLink>

        <NavLink to="/user" className="flex  gap-3" end>
          {" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
          </span>
          User List
        </NavLink>

        <NavLink className="flex items-center gap-3 " to="/product" end>
          <BsFillBoxSeamFill />
          Product
        </NavLink>
        <NavLink to="/a" className="flex gap-3" end>
          <BsBagDash className="w-6 h-6 mb-7" />
          Order
        </NavLink>
        <NavLink to="/s" className="flex gap-3" end>
          <HiOutlineDocumentReport className="w-6 h-6" />
          Sale Report
        </NavLink>
        <NavLink to="/Setting" className="flex gap-3" end>
          <GoGear className="w-6 h-6" />
          Settings
        </NavLink>
        <div className="logout">
          <NavLink to="/Logout" className="flex gap-3" end>
            <IoIosLogOut className="w-6 h-6" />
            Logout
          </NavLink>
        </div>
      </div>

      <div className="content">
        <div className="top-bar">
          <div className="search-container">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.099zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>

            <input type="text" id="search" placeholder="Search product..." />

            <button className="clear-btn">Clear</button>
            <button className="filter-btn">Filter</button>
          </div>

          <button className="add-product-btn">+ Add Product</button>
        </div>

        <div className="table-box">
          <div className="table-header">
            <h3>User List</h3>
            {/* <button className="add-btn">+ Add User</button> */}
          </div>

          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#866</td>

                  <td>
                    <div className="user-info">
                      <span>Zozoz</span>
                    </div>
                  </td>

                  <td>zozoz@gmail.com</td>

                  <td>
                    <span className="status active">Active</span>
                  </td>

                  <td>
                    <span className="role">Admin</span>
                  </td>

                  <td>
                    <button className="edit-btn">Edit</button>

                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default user;
