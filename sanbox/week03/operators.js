// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

//Write the code for the isHit() function. Note that Math.random() will generate a number between 0 and 1.
function isHit() {
    return Math.random() > 0.5;
}

//Write the code for the shipCanFire() function. It should return true if the ship's health is above 0 AND ammo is above 0, return false otherwise
function shipCanFire() {
    return shipHealth > 0 && shipAmmo > 0;
}

//Write the code for isDestroyed(health). It should return true if health is zero or less
function isDestroyed(health) {
    return shipHealth <= 0;
}

//Write the reloadShip() function. If the ship runs out of ammo before destroying the target, it will suffer damage. This function sohuld reduce ship health by 1 and increase ammo by 3.
function reloadShip() {
        shipHealth--; // Reduce shipHealt by 1
        shipAmmo += 3; 
}

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }

}

encounter();