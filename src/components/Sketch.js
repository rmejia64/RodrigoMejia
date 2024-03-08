import React, { useEffect, useRef } from "react";
import p5 from "p5";

function Mover(p) {
	this.p = p;
	this.rad = 20;
	this.acc = this.p.createVector(
		this.p.random(0.1, 0.9),
		this.p.random(-0.9, 0.1)
	);
	this.vel = this.p.createVector(this.p.random(-3, 3), this.p.random(-3, 3));
	this.loc = this.p.createVector(
		this.p.random(window.innerWidth),
		this.p.random(window.innerHeight)
	);
	this.force = this.p.createVector(0, 0); // Add this line to initialize the force vector

	// Placeholders for clr and stk
	this.clr = this.p.color(255, 255, 255); // Set your desired color
	this.stk = this.p.color(0, 0, 0); // Set your desired stroke color
}

Mover.prototype.run = function () {
	this.update(); // Pass no external force, default = (0,0)
	this.checkEdges();
	this.render();
};

Mover.prototype.applyForce = function (f) {
	this.acc.add(f);
};

Mover.prototype.render = function () {
	this.p.push();
	this.p.fill(this.clr); // Use the clr property for the fill color
	this.p.ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
	this.p.pop();
};

Mover.prototype.update = function () {
	// Reset acceleration to zero before applying force
	this.acc.set(0, 0);

	// Apply force
	this.applyForce(this.force);

	// Update velocity and location
	this.vel.add(this.acc);
	this.vel.limit(1);
	this.loc.add(this.vel);
};

Mover.prototype.checkEdges = function () {
	if (this.loc.x > window.innerWidth || this.loc.x < 0) {
		this.vel.x *= -1; // Reverse the horizontal velocity
	}
	if (this.loc.y > window.innerHeight || this.loc.y < 0) {
		this.vel.y *= -1; // Reverse the vertical velocity
	}
};

function Boid(p, repellers, attractors) {
	this.p = p;
	this.force = this.p.createVector(0, 0);
	this.force2 = this.p.createVector(0, 0);
	this.acc = this.p.createVector(
		this.p.random(0.1, 0.9),
		this.p.random(-0.9, 0.1)
	);
	this.vel = this.p.createVector(this.p.random(-3, 3), this.p.random(-3, 3));
	this.loc = this.p.createVector(
		this.p.random(window.innerWidth),
		this.p.random(window.innerHeight)
	);
	this.rad = 1;
	this.repellers = repellers;
	this.attractors = attractors;

	this.render = function () {
		this.p.push();
		this.p.fill(0, 0, 0);
		this.p.ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
		this.p.pop();
	};

	this.update = function () {
		for (let i = 0; i < this.attractors.length; i++) {
			this.force2 = p5.Vector.sub(this.loc, this.attractors[i].loc);
			this.force2.normalize();
			this.force2.mult(0.08);
			// If in range of a1--follow!
			if (this.loc.dist(this.attractors[i].loc) < 100) {
				this.applyForce(this.force2);
				this.vel.add(this.force2.mult(-1));
				this.vel.limit(this.p.random(3, 6));
			} else if (this.loc.dist(this.attractors[i].loc) < 90) {
				this.applyForce(this.force2);
				this.vel.add(this.force2.mult(-1));
				this.vel.limit(this.p.random(1, 2));
			}
		}

		for (let i = 0; i < this.repellers.length; i++) {
			this.force = p5.Vector.sub(this.loc, this.repellers[i].loc);
			this.force.normalize();
			this.force.mult(0.08);
			// If in range of r1--run for your life!
			if (this.loc.dist(this.repellers[i].loc) < 50) {
				this.applyForce(this.force);
				this.vel.add(this.force);
				this.vel.limit(this.p.random(3, 6));
			} else if (this.loc.dist(this.repellers[i].loc) < 90) {
				this.applyForce(this.force);
				this.vel.add(this.force);
				this.vel.limit(this.p.random(1, 2));
			}
		}

		this.loc.add(this.vel);
		this.acc.mult(0);
	};
}

function Attractor(p) {
	Mover.call(this, p); // Inherit properties from Mover

	// Additional properties specific to Attractor
	this.rad = 10; // Set the radius for the Attractor
	this.clr = this.p.color(0, 0, 200, 80); // Set the color for the Repeller
	this.stk = this.p.color(0, 0, 200);
	this.vel = this.p.createVector(this.p.random(-3, 3), this.p.random(-3, 3));
}

// Inherit prototype methods from Mover
Attractor.prototype = Object.create(Mover.prototype);
Attractor.prototype.constructor = Attractor;

// Override the run method to include Attractor-specific behavior
Attractor.prototype.run = function () {
	this.update(this.p.createVector(0, 0));
	this.bounce();
	this.render();
};

// Override the applyForce method to make Attractor unaffected by external forces
Attractor.prototype.applyForce = function (f) {
	// Do nothing for Attractor
};

Attractor.prototype.bounce = function () {
	// Check for collisions with walls
};

Attractor.prototype.render = function () {
    this.p.push();
    this.p.fill(this.clr);
    this.p.stroke(this.stk);
    this.p.strokeWeight(2);
    this.p.ellipse(this.loc.x, this.loc.y, this.rad * 2, this.rad * 2);

    // Draw a plus sign
    this.p.line(
		this.loc.x - this.rad / 2 - 1,  // Adjusted position considering stroke weight
		this.loc.y,
		this.loc.x + this.rad / 2 + 1,  // Adjusted position considering stroke weight
		this.loc.y
	);
	
	this.p.line(
		this.loc.x,
		this.loc.y - this.rad / 2 - 1,  // Adjusted position considering stroke weight
		this.loc.x,
		this.loc.y + this.rad / 2 + 1   // Adjusted position considering stroke weight
	);

    this.p.pop();
	console.log("Render Attractor"); // Check if render is being called
    console.log("Stroke Color:", this.stk.levels); 
};

function Repeller(p) {
	Mover.call(this, p); // Inherit properties from Mover

	// Additional properties specific to Repeller
	this.rad = 10; // Set the radius for the Repeller
	this.clr = this.p.color(200, 0, 0, 80); // Set the color for the Repeller
	this.stk = this.p.color(200, 0, 0);
	this.vel = this.p.createVector(this.p.random(-3, 3), this.p.random(-3, 3));
}

// Inherit prototype methods from Mover
Repeller.prototype = Object.create(Mover.prototype);
Repeller.prototype.constructor = Repeller;

// Override the run method to include Repeller-specific behavior
Repeller.prototype.run = function () {
	this.update(this.p.createVector(0, 0)); // Repeller applies force in the opposite direction
	this.bounce();
	this.render();
};

Repeller.prototype.update = function () {
	this.applyForce(this.force);
	this.vel.add(this.acc);
	this.vel.limit(1);
	this.loc.add(this.vel);
};

Repeller.prototype.bounce = function () {
	// Check for collisions with walls
	if (this.loc.x > window.innerWidth || this.loc.x < 0) {
		this.vel.x *= -1; // Reverse the horizontal velocity
	}
	if (this.loc.y > window.innerHeight || this.loc.y < 0) {
		this.vel.y *= -1; // Reverse the vertical velocity
	}
};

// Override the applyForce method to invert the force for Repeller
Repeller.prototype.applyForce = function (f) {
	this.acc.add(f); // Use add instead of sub to invert the force for Repeller
};

Repeller.prototype.render = function () {
    this.p.push();
    this.p.fill(this.clr);
    this.p.stroke(this.stk);
    this.p.strokeWeight(2);
    this.p.ellipse(this.loc.x, this.loc.y, this.rad * 2, this.rad * 2);

    // Draw a minus sign
    this.p.line(
		this.loc.x - this.rad - 1,  // Adjusted position considering stroke weight
		this.loc.y,
		this.loc.x + this.rad + 1,  // Adjusted position considering stroke weight
		this.loc.y
	);

    this.p.pop();
};

const Sketch = () => {
  const sketchRef = useRef();
  useEffect(() => {
    const sketch = (p) => {
      const boids = [];
      const numBoids = 1000;
      const attractors = [];
      const numAtt = 5;
      const repellers = [];
      const numRep = 5;
      const canvasWidth = window.innerWidth;
      const canvasHeight = 500;

      p.setup = () => {
        let cnv = p.createCanvas(canvasWidth, canvasHeight).parent(sketchRef.current);
		cnv.position(0, 0);
        cnv.style("z-index", "-1");
		cnv.style("margin-top", "80px");

        // Assign prototypes before creating instances
        Repeller.prototype = Object.create(Mover.prototype);
        Repeller.prototype.constructor = Repeller;
        Boid.prototype = Object.create(Mover.prototype);
        Boid.prototype.constructor = Boid;
        Attractor.prototype = Object.create(Mover.prototype);
        Attractor.prototype.constructor = Attractor;

        loadBoids(p, boids, attractors, repellers, numBoids, numAtt, numRep);
      };

      p.draw = () => {
        p.background(255);
        for (let i = 0; i < boids.length; i++) {
          boids[i].run();
        }
        for (let i = 0; i < attractors.length; i++) {
          attractors[i].run();
        }
        for (let i = 0; i < repellers.length; i++) {
          repellers[i].run();
        }
      };
    };

    function loadBoids(p, boids, attractors, repellers, numBoids, numAtt, numRep) {
      for (let i = 0; i < numBoids; i++) {
        const boid = new Boid(p, repellers, attractors);
        boids.push(boid);
      }

      for (let i = 0; i < numAtt; i++) {
        const att = new Attractor(p);
        attractors.push(att);
      }

      for (let i = 0; i < numRep; i++) {
        const rep = new Repeller(p);
        repellers.push(rep);
      }
    }

    new p5(sketch);
  }, []); // Ensure that this effect runs only once

  return <div ref={sketchRef} id="p5-sketch-container"></div>;
};

export default Sketch;
