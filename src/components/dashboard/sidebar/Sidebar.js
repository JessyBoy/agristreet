import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Logo2 from "../../../resources/logo2.jpeg";
import { Link } from "react-router-dom";

function Sidebar({ open }) {
  return (
    <>
      <div
        className={
          (open ? "fixed lg:hidden" : "hidden") + " bg-gray-100 h-full"
        }
      >
        <div className="lg:h-full lg:border-2 lg:border-green-400">
          <div>
            <img src={Logo2} alt="logo" />
          </div>

          {/* Dashboard */}
          <Link to="/farmer-dashboard">
            <div className="py-5 border-t-2 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-home fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Dashboard" />
              </ListItem>
            </div>
          </Link>

          {/* Orders */}
          <Link to="/farmer-dashboard/order">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-pencil-square-o fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Orders" />
              </ListItem>
            </div>
          </Link>

          {/* Product */}
          <Link to="/farmer-dashboard/products">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-archive fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Product" />
              </ListItem>
            </div>
          </Link>

          {/* Inventory */}
          <Link to="/farmer-dashboard/inventory">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-shopping-basket fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Inventory" />
              </ListItem>
            </div>
          </Link>

          {/* Notifications */}
          <Link to="/farmer-dashboard/notifications">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-bullhorn fa-2x"></i>
                </ListItemIcon>
                <ListItemText
                  className="text-green-400"
                  primary="Notifications"
                />
              </ListItem>
            </div>
          </Link>
        </div>
      </div>

      <div className="lg:h-full lg:border-2 lg:border-green-400">
        <div className="hidden lg:block">
          <div>
            <img className="w-full" src={Logo2} alt="logo" />
          </div>

          {/* Dashboard */}
          <Link to="/farmer-dashboard">
            <div className="py-5 border-t-2 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-home fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Dashboard" />
              </ListItem>
            </div>
          </Link>

          {/* Orders */}
          <Link to="/farmer-dashboard/order">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-pencil-square-o fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Orders" />
              </ListItem>
            </div>
          </Link>

          {/* Product */}
          <Link to="/farmer-dashboard/products">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-archive fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Product" />
              </ListItem>
            </div>
          </Link>

          {/* Inventory */}
          <Link to="/farmer-dashboard/inventory">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-shopping-basket fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Inventory" />
              </ListItem>
            </div>
          </Link>

          {/* Messages */}
          <Link to="/farmer-dashboard/messages">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-commenting-o fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Messages" />
              </ListItem>
            </div>
          </Link>

          {/* Profile */}
          <Link to="/farmer-dashboard/profile">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-user fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Profile" />
              </ListItem>
            </div>
          </Link>

          {/* Accounts */}
          <Link to="/farmer-dashboard/account">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-id-card-o fa-2x"></i>
                </ListItemIcon>
                <ListItemText className="text-green-400" primary="Account" />
              </ListItem>
            </div>
          </Link>

          {/* Maintenance */}
          <Link to="/farmer-dashboard/maintenance">
            <div className="py-5 border-b-2 border-green-400">
              <ListItem>
                <ListItemIcon>
                  <i className="text-green-400 fa fa-cog fa-2x"></i>
                </ListItemIcon>
                <ListItemText
                  className="text-green-400"
                  primary="Maintenance"
                />
              </ListItem>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
