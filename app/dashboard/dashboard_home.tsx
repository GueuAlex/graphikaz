import React from "react";
import { IonIcon } from "@ionic/react";
import {
  eyeOutline,
  cartOutline,
  chatbubbleOutline,
  cashOutline,
} from "ionicons/icons";
/* import {
  EyeOutline,
  CartOutline,
  ChatbubbleOutline,
  CashOutline,
} from "react-ionicons"; */

const DashboardHome = () => {
  return (
    <div className="dashboard-child">
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">1,504</div>
            <div className="cardName">Daily Views</div>
          </div>

          <div className="iconBx">
            {/* <ion-icon name="eye-outline"></ion-icon> */}
            {/* <EyeOutline cssClasses={"iconBx"} /> */}
            <IonIcon icon={eyeOutline} className="iconBx"></IonIcon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">80</div>
            <div className="cardName">Sales</div>
          </div>

          <div className="iconBx">
            {/*  <ion-icon name="cart-outline"></ion-icon> */}
            {/*  <CartOutline cssClasses={"iconBx"} /> */}
            <IonIcon icon={cartOutline} className="iconBx"></IonIcon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">284</div>
            <div className="cardName">Comments</div>
          </div>

          <div className="iconBx">
            {/* <ion-icon name="chatbubbles-outline"></ion-icon> */}
            {/* <ChatbubbleOutline cssClasses={"iconBx"} /> */}
            <IonIcon icon={chatbubbleOutline} className="iconBx"></IonIcon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">7,842</div>
            <div className="cardName">Earning</div>
          </div>

          <div className="iconBx">
            {/* <ion-icon name="cash-outline"></ion-icon> */}
            {/* <CashOutline cssClasses={"iconBx"} /> */}
            <IonIcon icon={cashOutline} className="iconBx"></IonIcon>
          </div>
        </div>
      </div>

      {/*  <!-- ================ Order Details List ================= --> */}
      <div className="details">
        {/* <!-- ========================= Recent ORder ==================== --> */}
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Recent Orders</h2>
            <a href="#" className="btn">
              View All
            </a>
          </div>

          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>Paid</td>
                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>

              <tr>
                <td>Dell Laptop</td>
                <td>$110</td>
                <td>Due</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Apple Watch</td>
                <td>$1200</td>
                <td>Paid</td>
                <td>
                  <span className="status return">Return</span>
                </td>
              </tr>

              <tr>
                <td>Addidas Shoes</td>
                <td>$620</td>
                <td>Due</td>
                <td>
                  <span className="status inProgress">In Progress</span>
                </td>
              </tr>

              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>Paid</td>
                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>

              <tr>
                <td>Dell Laptop</td>
                <td>$110</td>
                <td>Due</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>

              <tr>
                <td>Apple Watch</td>
                <td>$1200</td>
                <td>Paid</td>
                <td>
                  <span className="status return">Return</span>
                </td>
              </tr>

              <tr>
                <td>Addidas Shoes</td>
                <td>$620</td>
                <td>Due</td>
                <td>
                  <span className="status inProgress">In Progress</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- ================= New Customers ================ --> */}
        <div className="recentCustomers">
          <div className="cardHeader">
            <h2>Recent Transactions</h2>
          </div>

          <table>
            <tr>
              <td width="60px">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">D</span>
                  </div>
                </div>
              </td>
              <td>
                <h4>
                  David <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">A</span>
                  </div>
                </div>
              </td>
              <td>
                <h4>
                  Amit <br />
                  <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">D</span>
                  </div>
                </div>
              </td>
              <td>
                <h4>
                  David <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">A</span>
                  </div>
                </div>
              </td>
              <td>
                <h4>
                  Amit <br />
                  <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">D</span>
                  </div>
                </div>
              </td>
              <td>
                <h4>
                  David <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">A</span>
                  </div>
                </div>
              </td>
              <td>
                <h4>
                  Amit <br />
                  <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">D</span>
                  </div>
                </div>
              </td>
              <td>
                <h4>
                  David <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">A</span>
                  </div>
                </div>
              </td>
              <td>
                <h4>
                  Amit <br />
                  <span>India</span>
                </h4>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
