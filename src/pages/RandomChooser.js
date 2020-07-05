import React, { useState, useEffect } from "react";
import { Col, Button, Row, Space } from "antd";
import RestaurantCard from "../components/restaurantcard/RestaurantCard";
import getWeightedRestaurants from "../hooks/getWeightedRestaurants";
import useRestaurants from "../hooks/useRestaurants";
import "./pages.css";

const RandomChooser = () => {
  const [order, setOrder] = useState(["Kaden", "Jaidha", "CJ", "Gid"]);
  const [sortedRestaurants, setSortedRestaurants] = useState([]);
  const [restaurants] = useRestaurants();

  useEffect(() => {
    const res = getWeightedRestaurants(restaurants, order);
    setSortedRestaurants(res);
    console.log(res);
  }, [restaurants, order]);

  //Shift order over by one
  const rotateOrder = () => {
    var rotatedArray = [...order];
    const x = order[order.length - 1];

    for (let i = order.length - 1; i > 0; i--) {
      rotatedArray[i] = rotatedArray[i - 1];
    }

    rotatedArray[0] = x;
    return rotatedArray;
  };

  return (
    <div className="chooser">
      <Space size={16} class="full" direction="vertical" align="center">
        <Button block type="primary" onClick={() => setOrder(rotateOrder())}>
          Next in line!
        </Button>

        <Row gutter={8}>
          {order.map((item, index) => {
            return (
              <Col span={24 / order.length} key={index}>
                <b> {`Preference ${index + 1}`} </b>
                <p>{item} </p>
              </Col>
            );
          })}
        </Row>

        {sortedRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} />
          );
        })}
      </Space>
    </div>
  );
};

export default RandomChooser;
