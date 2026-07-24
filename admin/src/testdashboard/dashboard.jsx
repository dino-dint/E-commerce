import React from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsBagDash } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GoGear } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";

import { BsSearch, BsBell, BsArrowUpRight, BsYoutube } from "react-icons/bs";

function Dashboard() {
  return (
    <div className="dashboard">
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
        <NavLink to="/" className="flex gap-3" end>
          <BsBagDash className="w-6 h-6 mb-7" />
          Order
        </NavLink>
        <NavLink to="/" className="flex gap-3" end>
          <HiOutlineDocumentReport className="w-6 h-6" />
          Sale Report
        </NavLink>
        <NavLink to="/" className="flex gap-3" end>
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

      <div className="dash-header">
        <div>
          <h1>Welcome back, Adaline!</h1>

          <p>It is the best time to manage your finances</p>
        </div>

        <div className="profile">
          <BsSearch />
          <BsBell />

          <div className="avatar">
            <img src="https://i.pinimg.com/736x/ce/b7/11/ceb711d9a82d9f405ba7cf18a74a0b71.jpg" />
          </div>

          <div>
            <b>Adaline Lively</b>
            <br />
            <small>adaline@gmail.com</small>
          </div>
        </div>
      </div>

      <div className="money-cards">
        <Card title="Total balance" money="$15,700" percent="12.1%" />

        <Card title="Income" money="$8,500" percent="6.3%" />

        <Card title="Expense" money="$6,222" percent="2.4%" />

        <Card title="Total savings" money="$32,913" percent="12.1%" />
      </div>

      <div className="middle">
        <div className="box">
          <h2>Money flow</h2>

          <div className="chart">
            {[70, 90, 110, 130, 120, 80, 100].map((x, i) => (
              <div className="bar-group" key={i}>
                <div className="bar income" style={{ height: x }}></div>

                <div className="bar expense" style={{ height: x - 20 }}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="box budget">
          <h2>Budget</h2>

          <div className="circle">$5,950</div>

          <p>☕ Cafe & Restaurants</p>

          <p>🎮 Entertainment</p>

          <p>🛒 Food & Groceries</p>
        </div>
      </div>

      <div className="bottom">
        <div className="box transactions">
          <h2>Recent transactions</h2>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Method</th>
                <th>Category</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>25 Jul 12:30</td>
                <td>-$10</td>
                <td>
                  <BsYoutube /> YouTube
                </td>
                <td>VISA ****</td>
                <td>Subscription</td>
              </tr>

              <tr>
                <td>26 Jul 15:00</td>
                <td>-$150</td>
                <td>Reserved</td>
                <td>Mastercard</td>
                <td>Shopping</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="box goals">
          <h2>Saving goals</h2>

          <p>MacBook Pro</p>

          <div className="progress">
            <span style={{ width: "25%" }}></span>
          </div>

          <p>New car</p>

          <div className="progress">
            <span style={{ width: "42%" }}></span>
          </div>

          <p>New house</p>

          <div className="progress">
            <span style={{ width: "30%" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, money, percent }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <h1>{money}</h1>

      <span>↑ {percent} vs last month</span>
    </div>
  );
}

export default Dashboard;
