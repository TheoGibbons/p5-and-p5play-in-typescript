/**
 * This is file was created to add types for the p5.play library.
 *
 * @see https://p5play.org/docs/Sprite_Sprite.html
 * @see https://github.com/Triton-Skywalker/Definition-File
 */

// @ts-ignore
import * as p5 from 'p5';
import * as Plank from "planck-js";                // eslint-disable-line


declare module 'P5' {
    class Sprite {
        /**
         * <a href="https://p5play.org/learn/sprite.html">
         * Look at the Sprite reference pages before reading these docs.
         * </a>
         *
         * The Sprite constructor can be used in many different ways.
         * Every sprite you create is added to the `allSprites`
         * group and put on the top layer, in front of all
         * previously created sprites.
         *
         * @param {Number} [x] - horizontal position of the sprite
         * @param {Number} [y] - vertical position of the sprite
         * @param {Number} [w] - width of the placeholder rectangle and of
         * the collider until an image or new collider are set. *OR* If height is not
         * set then this parameter becomes the diameter of the placeholder circle.
         * @param {Number} [h] - height of the placeholder rectangle and of the collider
         * until an image or new collider are set
         * @param {String} [collider] - collider type is 'dynamic' by default, can be
         * 'static', 'kinematic', or 'none'
         * @example
         *
         * let sprite = new Sprite();
         *
         * let rectangle = new Sprite(x, y, width, height);
         *
         * let circle = new Sprite(x, y, diameter);
         *
         * let line = new Sprite(x, y, [length, angle]);
         */
        constructor(x?: number, y?: number, w?: any, h?: any, collider?: any, ...args: any[]);

        p: any;
        /**
         * Each sprite has a unique id number. Don't change it!
         * Its useful for debugging. Sprite id numbers start at 1000.
         *
         * @type {Number}
         */
        idNum: number;
        _noArgs: boolean;
        _originMode: string;
        _uid: number;
        /**
         * Groups the sprite belongs to, including allSprites
         *
         * @type {Array}
         * @default [allSprites]
         */
        groups: any[];
        /**
         * Keys are the animation label, values are SpriteAnimation objects.
         *
         * @type {SpriteAnimations}
         */
        animations: SpriteAnimations;
        /**
         * True if the sprite was removed from the world
         *
         * @type {Boolean}
         * @default false
         */
        removed: boolean;
        _shape: any;
        /**
         * Cycles before self removal.
         * Set it to initiate a countdown, every draw cycle the property is
         * reduced by 1 unit. If less than or equal to 0, this sprite will be removed.
         *
         * @type {Number}
         * @default 100000000
         */
        life: number;
        /**
         * The sprite's visibility.
         *
         * @type {Boolean}
         * @default true
         */
        visible: boolean;
        _aniChangeCount: number;
        /**
         * Contains all the collision callback functions for this sprite
         * when it comes in contact with other sprites or groups.
         */
        _collides: {};
        _colliding: {};
        _collided: {};
        _overlap: {};
        /**
         * Contains all the overlap callback functions for this sprite
         * when it comes in contact with other sprites or groups.
         */
        _overlaps: {};
        _overlapping: {};
        _overlapped: {};
        _collisions: {};
        _overlappers: {};
        /**
         * The tile size is used to change the size of one unit of
         * measurement for the sprite.
         *
         * For example, if the tile size is 16, then a sprite with
         * x=1 and y=1 will be drawn at position (16, 16) on the canvas.
         *
         * @type {Number}
         * @default 1
         */
        tileSize: number;
        _position: {
            x: number;
            y: number;
        };
        _pos: any;
        _velocity: {
            x: number;
            y: number;
        };
        _vel: any;
        _mirror: {
            _x: number;
            _y: number;
            x: boolean;
            y: boolean;
        };
        /**
         * By default sprites are drawn in the order they were created in.
         * You can change the draw order by editing sprite's layer
         * property. Sprites with the highest layer value get drawn first.
         *
         * @type {Number}
         */
        layer: number;

        set collider(arg: string);
        /**
         * The sprite's collider type. Default is 'dynamic'.
         *
         * The collider type can be one of the following strings:
         * 'dynamic', 'static', 'kinematic', 'none'.
         *
         * @type {String}
         * @default 'dynamic'
         */
        get collider(): string;

        _vertexMode: boolean;

        set x(arg: number);
        /**
         * The horizontal position of the sprite.
         * @type {Number}
         */
        get x(): number;

        set y(arg: number);
        /**
         * The vertical position of the sprite.
         * @type {Number}
         */
        get y(): number;

        _ani: any;
        mouse: any;

        set w(arg: number);
        /**
         * The width of the sprite.
         * @type {Number}
         */
        get w(): number;

        set h(arg: number);
        /**
         * The height of the sprite.
         * @type {Number}
         */
        get h(): number;

        _scale: any;
        _offset: {
            _x: number;
            _y: number;
            x: number;
            y: number;
        };
        /**
         * The sprite's position on the previous frame.
         *
         * @type {object}
         */
        prevPos: object;
        _dest: {
            x: number;
            y: number;
        };
        _destIdx: number;

        set drag(arg: number);
        /**
         * The amount of resistance a sprite has to being moved.
         *
         * @type {Number}
         * @default 0
         */
        get drag(): number;

        /**
         * When the sprite.debug property is set to true, the collider
         * shapes will be drawn as bright green outlines with crosshairs
         * at the center of the sprite.
         *
         * When the sprite.debug property is set to 'colliders', only the
         * collider shapes will be drawn.
         *
         * @type {boolean|string}
         * @default false
         */
        debug: boolean | string;
        _shift: {};
        /**
         * @type {Number}
         * @default undefined
         */
        strokeWeight: number;
        _massUndefinedByUser: boolean;
        _dimensionsUndefinedByUser: boolean;

        /**
         * Adds a collider (fixture) to the sprite's physics body.
         *
         * It accepts parameters in a similar format to the Sprite
         * constructor except the first two parameters are x and y offsets,
         * the distance new collider should be from the center of the sprite.
         *
         * One limitation of the current implementation is that the collider
         * type can't be changed without losing every collider added to the
         * sprite besides the first. This will be fixed in a future release.
         *
         * @param {Number} offsetX distance from the center of the sprite
         * @param {Number} offsetY distance from the center of the sprite
         * @param {Number} w width of the collider
         * @param {Number} h height of the collider
         */
        addCollider(offsetX: number, offsetY: number, w: number, h: number, ...args: any[]): void;

        body: any;

        /**
         * Adds a sensor to the sprite's physics body that's used to detect
         * overlaps with other sprites.
         *
         * It accepts parameters in a similar format to the Sprite
         * constructor except the first two parameters are x and y offsets,
         * the relative distance the new sensor should be from the center of
         * the sprite.
         *
         * @param {Number} offsetX distance from the center of the sprite
         * @param {Number} offsetY distance from the center of the sprite
         * @param {Number} w width of the collider
         * @param {Number} h height of the collider
         */
        addSensor(offsetX: number, offsetY: number, w: number, h: number, ...args: any[]): void;

        _hasSensors: boolean;

        _parseShape(offsetX: any, offsetY: any, w: any, h: any, ...args: any[]): any;

        _hw: number;
        _hh: number;
        _relativeOrigin: {
            x: number;
            y: number;
        };
        _w: any;
        _diameter: any;
        _h: any;

        /**
         * Removes the physics body colliders from the sprite but not
         * overlap sensors.
         *
         * Only use this method if you never want to use the sprite's
         * colliders again. If you want to disable colliders without
         * removing them, use the overlaps, overlapping, or overlapped
         * functions instead.
         *
         */
        removeColliders(): void;

        addJoint(spriteB: any, type: any, props: any): any;

        /**
         * Removes overlap sensors from the sprite.
         *
         * Only use this method if you never want to use the sprite's
         * overlap sensors again. To disable overlap sensors without
         * removing them, use the collides, colliding, or collided functions
         * instead.
         *
         */
        removeSensors(): void;

        _removeFixtures(removeSensors: any): void;

        _offsetCenterBy(x: any, y: any): void;

        /**
         * Clones the collider's props to be transferred to a new collider.
         * @private
         */
        private _cloneBodyProps;

        set allowSleeping(arg: boolean);
        /**
         * This property disables the ability for a sprite to "sleep".
         *
         * "Sleeping" sprites are not included in the physics simulation, a
         * sprite starts "sleeping" when it stops moving and doesn't collide
         * with anything that it wasn't already _touching.
         *
         * @type {Boolean}
         * @default true
         */
        get allowSleeping(): boolean;

        set animation(arg: SpriteAnimation);
        /**
         * Reference to the sprite's current animation.
         *
         * @type {SpriteAnimation}
         */
        get animation(): SpriteAnimation;

        set ani(arg: any);
        get ani(): any;

        get anis(): SpriteAnimations;

        set bounciness(arg: number);
        /**
         * The bounciness of the sprite's physics body.
         *
         * @type {Number}
         * @default 0.2
         */
        get bounciness(): number;

        /**
         * The center of mass of the sprite's physics body.
         *
         * @type {Number}
         */
        get centerOfMass(): number;

        __collider: number;
        _collider: any;

        _reset(): void;

        _parseColor(val: any): any;

        set color(arg: p5.Color);
        /**
         * The sprite's current color. By default sprites get a random color.
         *
         * @type {p5.Color}
         * @default random color
         */
        get color(): p5.Color;

        _color: any;

        set colour(arg: p5.Color);
        /**
         * Alias for color. colour is the British English spelling.
         *
         * @type {p5.Color}
         * @default random color
         */
        get colour(): p5.Color;

        set shapeColor(arg: any);
        /**
         * @deprecated
         */
        get shapeColor(): any;

        set fill(arg: p5.Color);
        /**
         * Alias for sprite.fillColor
         *
         * @type {p5.Color}
         * @default random color
         */
        get fill(): p5.Color;

        set fillColor(arg: p5.Color);
        /**
         * Alias for sprite.color
         *
         * @type {p5.Color}
         * @default random color
         */
        get fillColor(): p5.Color;

        set stroke(arg: p5.Color);
        /**
         * Alias for sprite.strokeColor
         *
         * @type {p5.Color}
         */
        get stroke(): p5.Color;

        _stroke: any;

        set strokeColor(arg: p5.Color);
        /**
         * The sprite's stroke current color. By default the stroke of a sprite
         * indicates its collider type.
         *
         * @type {p5.Color}
         */
        get strokeColor(): p5.Color;

        set textColor(arg: p5.Color);
        /**
         * The sprite's current text color. Black by default.
         *
         * @type {p5.Color}
         * @default black (#000000)
         */
        get textColor(): p5.Color;

        _textColor: any;

        set density(arg: number);
        /**
         * The density of the sprite's physics body.
         *
         * @type {Number}
         */
        get density(): number;

        set depth(arg: number);
        /**
         * Use .layer instead.
         *
         * @deprecated depth
         */
        get depth(): number;

        set direction(arg: number);
        /**
         * The angle of the sprite's movement or it's rotation angle if the
         * sprite is not moving.
         *
         * @type {Number}
         * @default 0 ("right")
         */
        get direction(): number;

        _heading: any;
        _direction: number;

        set draw(arg: () => void);
        /**
         * Displays the sprite.
         *
         * This function is called automatically at
         * the end of each p5.js draw function call but it can also be run
         * separately to customize the order sprites are drawn in relation
         * to other stuff drawn to the p5.js canvas. Also see the sprite.layer
         * property.
         *
         * A sprite's draw function can be overridden with a
         * custom draw function, in which the center of the sprite is
         * at (0, 0).
         *
         * @example
         * sprite.draw = function() {
         *   // an oval
         *   ellipse(0,0,20,10);
         * }
         *
         */
        get draw(): () => void;

        /**
         * Default draw
         *
         * @private
         */
        private _draw;

        set dynamic(arg: boolean);
        /**
         * True if the sprite's physics body is dynamic.
         *
         * @type {Boolean}
         * @default true
         */
        get dynamic(): boolean;

        set rotationLock(arg: boolean);
        /**
         * If true the sprite can not rotate.
         *
         * @type {Boolean}
         * @default false
         */
        get rotationLock(): boolean;

        /**
         * Returns the first node in a linked list of the planck physics
         * body's fixtures.
         */
        get fixture(): any;

        /**
         * Returns the first node in a linked list of the planck physics
         * body's fixtures.
         */
        get fixtureList(): any;

        set friction(arg: number);
        /**
         * The amount the sprite's physics body resists moving
         * when rubbing against another physics body.
         *
         * @type {Number}
         * @default 0.5
         */
        get friction(): number;

        set heading(arg: string);
        /**
         * The sprite's heading. This is a string that can be set to
         * "up", "down", "left", "right", "upRight", "upLeft", "downRight"
         *
         * It ignores cardinal direction word order, capitalization, spaces,
         * underscores, and dashes.
         *
         * @type {String}
         * @default undefined
         */
        get heading(): string;

        set immovable(arg: any);
        /**
         * Use .static instead.
         *
         * @deprecated immovable
         */
        get immovable(): any;

        set img(arg: SpriteAnimation);
        /**
         * A reference to the sprite's current image.
         *
         * @type {SpriteAnimation}
         */
        get img(): SpriteAnimation;

        set image(arg: SpriteAnimation);
        /**
         * A reference to the sprite's current image.
         *
         * @type {SpriteAnimation}
         */
        get image(): SpriteAnimation;

        /**
         * True if the sprite is moving.
         *
         * @type {Boolean}
         * @readonly
         */
        get isMoving(): boolean;

        set isSuperFast(arg: boolean);
        /**
         * Set this to true if the sprite goes really fast to prevent
         * inaccurate physics simulation.
         *
         * @type {Boolean}
         * @default false
         */
        get isSuperFast(): boolean;

        set kinematic(arg: boolean);
        /**
         * True if the sprite's physics body is kinematic.
         *
         * @type {Boolean}
         * @default false
         */
        get kinematic(): boolean;

        set mass(arg: number);
        /**
         * The mass of the sprite's physics body.
         *
         * @type {Number}
         */
        get mass(): number;

        get massData(): {
            I: number;
            center: any;
            mass: number;
        };

        set mirror(arg: any);
        /**
         * The sprite's mirror states.
         *
         * @type {Object}
         * @property {Boolean} x - The sprite's horizontal mirror state.
         * @property {Boolean} y - The sprite's vertical mirror state.
         * @default {x: false, y: false}
         */
        get mirror(): any;

        set offset(arg: any);
        /**
         * Offset the sprite, relative to the origin of its physics body.
         *
         * The sprite's x and y properties represent its center in world
         * coordinates. This point is also the sprite's center of rotation
         * and where its images and animations are drawn.
         *
         * @type {object}
         */
        get offset(): any;

        set previousPosition(arg: any);
        /**
         * Verbose alias for sprite.prevPos
         *
         * @type {object}
         */
        get previousPosition(): any;

        set rotation(arg: number);
        /**
         * The angle of the sprite's rotation, not the direction it is moving.
         *
         * @type {Number}
         * @default 0
         */
        get rotation(): number;

        _angle: number;

        set rotationDrag(arg: number);
        /**
         * The amount the sprite resists rotating.
         *
         * @type {Number}
         * @default 0
         */
        get rotationDrag(): number;

        set rotationSpeed(arg: number);
        /**
         * The speed of the sprite's rotation.
         *
         * @type {Number}
         * @default 0
         */
        get rotationSpeed(): number;

        _rotationSpeed: number;

        set scale(arg: any);
        /**
         * Scale of the sprite's physics body. Default is {x: 1, y: 1}
         *
         * The getter for sprite.scale returns the scale as an object with
         * x and y properties.
         *
         * The valueOf function for sprite.scale returns the scale as a
         * number. This enables users to do things like `sprite.scale *= 2`
         * to double the sprite's scale.
         *
         * @type {Number|Object}
         * @default 1
         */
        get scale(): any;

        set sleeping(arg: boolean);
        /**
         * Wake a sprite up or put it to sleep.
         *
         * "Sleeping" sprites are not included in the physics simulation, a
         * sprite starts "sleeping" when it stops moving and doesn't collide
         * with anything that it wasn't already _touching.
         *
         * @type {Boolean}
         * @default true
         */
        get sleeping(): boolean;

        set speed(arg: number);
        /**
         * The sprite's speed.
         *
         * @type {Number}
         * @default 0
         */
        get speed(): number;

        set static(arg: boolean);
        /**
         * Is the sprite's physics collider static?
         *
         * @type {Boolean}
         * @default false
         */
        get static(): boolean;

        /**
         * The sprite's vertices.
         *
         * @type {Array}
         * @return an array of p5.Vector objects
         * @readonly
         */
        get vertices(): any[];

        _getVertices(output2DArrays: any): any[];

        set pos(arg: p5.Vector);
        /**
         * The position vector {x, y}
         *
         * @type {p5.Vector}
         */
        get pos(): p5.Vector;

        set position(arg: p5.Vector);
        /**
         * The position vector {x, y}
         *
         * @type {p5.Vector}
         */
        get position(): p5.Vector;

        set hw(arg: number);
        /**
         * Half the width of the sprite.
         * @type {Number}
         */
        get hw(): number;

        set width(arg: number);
        /**
         * The width of the sprite.
         * @type {Number}
         */
        get width(): number;

        set halfWidth(arg: number);
        /**
         * Half the width of the sprite.
         * @type {Number}
         */
        get halfWidth(): number;

        set hh(arg: number);
        /**
         * Half the height of the sprite.
         * @type {Number}
         */
        get hh(): number;

        set height(arg: number);
        /**
         * The height of the sprite.
         * @type {Number}
         */
        get height(): number;

        set halfHeight(arg: number);
        /**
         * Half the height of the sprite.
         * @type {Number}
         */
        get halfHeight(): number;

        set d(arg: number);
        /**
         * The diameter of a circular sprite.
         * @type {Number}
         */
        get d(): number;

        set diameter(arg: number);
        /**
         * The diameter of a circular sprite.
         * @type {Number}
         */
        get diameter(): number;

        set r(arg: number);
        /**
         * The radius of a circular sprite.
         * @type {Number}
         */
        get r(): number;

        set radius(arg: number);
        /**
         * The radius of a circular sprite.
         * @type {Number}
         */
        get radius(): number;

        /**
         * Resizes the collider of the sprite.
         *
         * @private
         * @param {*} scalars The x and y scalars to resize the collider by.
         */
        private _resizeCollider;
        /**
         * Validate convexity.
         *
         * @private
         * @param vecs {Array} an array of planck.Vec2 vertices
         * @returns true if the polygon is convex
         */
        private _isConvexPoly;

        set shape(arg: string);
        /**
         * The kind of shape: 'box', 'circle', 'chain', or 'polygon'.
         *
         * @type {String}
         * @default box
         */
        get shape(): string;

        set update(arg: () => void);
        /**
         * You can set the sprite's update function to a custom
         * update function which by default, will be run after every p5.js
         * draw call.
         *
         * This function updates the sprite's animation, mouse, and
         *
         * There's no way to individually update a sprite or group
         * of sprites in the physics simulation though.
         *
         */
        get update(): () => void;

        _customUpdate: () => void;

        set vel(arg: any);
        get vel(): any;

        set velocity(arg: any);
        get velocity(): any;

        _update(): void;

        autoUpdate: any;

        _step(): void;

        /**
         * Displays the Sprite with rotation and scaling applied before
         * the sprite's draw function is called.
         *
         * @private
         */
        private _display;
        _cameraActiveWhenDrawn: any;
        autoDraw: any;
        /**
         * Draws a fixture. Used to draw the sprite's physics body.
         *
         * @private
         */
        private _drawFixture;

        _args2Vec(x: any, y: any): {
            x: any;
            y: any;
        };

        /**
         * Apply a force that is scaled to the sprite's mass.
         *
         * @param {Number} x
         * @param {Number} y
         * @param {Number} [originX]
         * @param {Number} [originY]
         * @example
         * sprite.applyForce(x, y);
         * sprite.applyForce(x, y, originX, originY);
         * sprite.applyForce(x, y, {x: originX, y: originY});
         * sprite.applyForce({x, y}, {x: originX, y: originY});
         */
        applyForce(x: number, y: number, originX?: number, originY?: number, ...args: any[]): void;

        /**
         * Apply an impulse to the sprite's physics collider.
         *
         * @param {Number} x
         * @param {Number} y
         * @param {Number} [originX]
         * @param {Number} [originY]
         * @example
         * sprite.applyImpulse(x, y);
         * sprite.applyImpulse(x, y, originX, originY);
         * sprite.applyImpulse(x, y, {x: originX, y: originY});
         * sprite.applyImpulse({x, y}, {x: originX, y: originY});
         */
        applyImpulse(x: number, y: number, originX?: number, originY?: number, ...args: any[]): void;

        /**
         * Apply a torque on the sprite's physics body.
         * Torque is the force that causes rotation.
         * A positive torque will rotate the sprite clockwise.
         * A negative torque will rotate the sprite counter-clockwise.
         *
         * @param {Number} torque The amount of torque to apply.
         */
        applyTorque(val: any): void;

        /**
         * Deprecated: set sprite.vel instead.
         *
         * Sets the velocity vector.
         *
         * @deprecated setVelocity
         * @param {Number} vector|x vector or horizontal velocity
         * @param {Number} y vertical velocity
         * @example
         * sprite.vel = createVector(1, 2);
         * // OR
         * sprite.vel.x = 1;
         * sprite.vel.y = 2;
         */
        setVelocity(x: any, y: number): void;

        /**
         * Deprecated: set direction and set speed separately
         *
         * Sets the speed of the sprite.
         * The action overwrites the current velocity.
         * If direction is not supplied, the current direction is maintained.
         * If direction is not supplied and there is no current velocity, the
         * current rotation angle used for the direction.
         *
         * @deprecated setSpeed
         * @param {Number} speed Scalar speed
         * @param {Number} [direction] angle
         */
        setSpeed(speed: number, direction?: number): void;

        /**
         * Add to the speed of the sprite.
         * If direction is not supplied, the current direction is maintained.
         * If direction is not supplied and there is no current velocity, the * current rotation angle used for the direction.
         *
         * @param {Number} speed Scalar speed
         * @param {Number} [angle] Direction in degrees
         */
        addSpeed(speed: number, angle?: number): void;

        /**
         * Move a sprite towards a position.
         *
         * @param {Number|Object} x|position destination x or any object with x and y properties
         * @param {Number} y destination y
         * @param {Number} tracking [optional] 1 represents 1:1 tracking, the mouse moves to the destination immediately, 0 represents no tracking. Default is 0.1 (10% tracking).
         */
        moveTowards(x: number | any, y: number, tracking: number): void;

        /**
         * Move a sprite away from a position.
         *
         * @param {Number|Object} x|position x or any object with x and y properties
         * @param {Number} y
         * @param {Number} repel [optional] the higher the value, the faster the sprite moves away. Default is 0.1 (10% repel).
         */
        moveAway(x: number | any, y: number, repel: number, ...args: any[]): void;

        /**
         * Move the sprite a certain distance from its current position.
         *
         * @param {Number} distance [optional]
         * @param {Number|String} direction [optional]
         * @param {Number} speed [optional]
         * @returns {Promise} resolves when the movement is complete or cancelled
         *
         * @example
         * sprite.move(distance);
         * sprite.move(distance, direction);
         * sprite.move(distance, direction, speed);
         *
         * sprite.move(directionName);
         * sprite.move(directionName, speed);
         * sprite.move(directionName, speed, distance); // deprecated usage
         */
        move(distance: number, direction: number | string, speed: number, ...args: any[]): Promise<any>;

        /**
         * Move the sprite to a position.
         *
         * @param {Number|Object} x|position destination x or any object with x and y properties
         * @param {Number} y destination y
         * @param {Number} speed [optional]
         * @returns {Promise} resolves when the movement is complete or cancelled
         */
        moveTo(x: number | any, y: number, speed: number): Promise<any>;

        snap(o: any, dist: any): void;

        /**
         * Rotates the sprite towards an angle or position
         * with x and y properties.
         *
         * @param {Number|Object} angle|position angle in degrees or an object with x and y properties
         * @param {Number} tracking percent of the distance to rotate on each frame towards the target angle, default is 0.1 (10%)
         * @param {Number} facing (only if position is given) rotation angle the sprite should be at when "facing" the position, default is 0
         */
        rotateTowards(angle: number | any, tracking: number, ...args: any[]): void;

        /**
         * Finds the angle from this sprite to the given position or object
         * with x and y properties.
         *
         * Can be used to change the direction of a sprite so it moves
         * to a position or object.
         *
         * Used internally by `moveTo` and `moveTowards`.
         *
         * @param {Number} x
         * @param {Number} y
         * @returns {Number} angle
         * @example
         * spriteA.direction = spriteA.angleTo(spriteB);
         */
        angleTo(x: number, y: number): number;

        /**
         * Finds the minimium amount the sprite would have to rotate to
         * "face" a position at a specified "facing" rotation.
         *
         * Used internally by `rotateTo` and `rotateTowards`.
         *
         * @param {Number} x
         * @param {Number} y
         * @param {Number} facing - rotation angle the sprite should be at when "facing" the position, default is 0
         * @returns {Number} minimum angle of rotation to face the position
         */
        angleToFace(x: number, y: number, facing: number): number;

        /**
         * Rotates the sprite to an angle or to face a position.
         *
         * @param {Number|Object} angle|position
         * @param {Number} speed the amount of rotation per frame, default is 1
         * @param {Number} facing (only if position is given) the rotation angle the sprite should be at when "facing" the position, default is 0
         * @returns {Promise} a promise that resolves when the rotation is complete
         */
        rotateTo(angle: number | any, speed: number, ...args: any[]): Promise<any>;

        /**
         * Rotates the sprite by an amount at a specified angles per frame speed.
         *
         * @param {Number} angle the amount to rotate the sprite
         * @param {Number} speed the amount of rotation per frame, default is 1
         * @returns {Promise} a promise that resolves when the rotation is complete
         */
        rotate(angle: number, speed: number): Promise<any>;

        /**
         * Changes the sprite's animation. Use `addAni` to define the
         * animation(s) first.
         *
         * @param {...String} anis the names of one or many animations to be played in
         * sequence
         * @returns A promise that fulfills when the animation or sequence of animations
         * completes
         */
        changeAni(...args: string[]): Promise<void>;

        _playSequencedAni(ani: any): any;

        /**
         * Changes the sprite's animation. Use `addAni` to define the
         * animation(s) first. Alt for `changeAni`.
         *
         * @param {...String} anis the names of one or many animations to be played in
         * sequence
         * @returns A promise that fulfills when the animation or sequence of animations
         * completes
         */
        changeAnimation(...args: string[]): Promise<void>;

        /**
         * Changes the displayed animation. The animation must be added first
         * using the sprite.addAnimation method. The animation could also be
         * added using the group.addAnimation method to a group the sprite
         * has been added to.
         *
         * See SpriteAnimation for more control over the sequence.
         *
         * @private
         * @param {String} label SpriteAnimation identifier
         */
        private _changeAni;

        /**
         * Removes the Sprite from the sketch and all the groups it
         * belongs to.
         *
         * When a sprite is removed it will not be drawn or updated anymore.
         * If it has a physics body, it will be removed from the
         * physics world simulation.
         *
         * There's no way to undo this operation. If you want to hide a
         * sprite use `sprite.visible = false` instead.
         *
         */
        remove(): void;

        /**
         * Warning: This function might be changed in a future release.
         *
         * Returns the sprite's unique identifier
         *
         * @returns the sprite's id
         */
        toString(): string;

        _ensureCollide(target: any, callback: any): void;

        collide(target: any, callback: any): boolean;

        /**
         * Returns true on the first frame that the sprite collides with the
         * target sprite or group.
         *
         * Custom collision event handling can be done by using this function
         * in an if statement or adding a callback as the second parameter.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         */
        collides(target: Sprite | Group, callback?: Function): boolean;

        /**
         * Returns a truthy value while the sprite is colliding with the
         * target sprite or group. The value is the number of frames that
         * the sprite has been colliding with the target.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         * @return {Number} frames
         */
        colliding(target: Sprite | Group, callback?: Function): number;

        /**
         * Returns true on the first frame that the sprite no longer overlaps
         * with the target sprite or group.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         * @return {Boolean}
         */
        collided(target: Sprite | Group, callback?: Function): boolean;

        _removeContactsWith(target: any): void;

        __removeContactsWith(o: any): void;

        _ensureOverlap(target: any, callback: any): void;

        overlap(target: any, callback: any): boolean;

        /**
         * Returns true on the first frame that the sprite overlaps with the
         * target sprite or group.
         *
         * Custom overlap event handling can be done by using this function
         * in an if statement or adding a callback as the second parameter.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         */
        overlaps(target: Sprite | Group, callback?: Function): boolean;

        /**
         * Returns a truthy value while the sprite is overlapping with the
         * target sprite or group. The value returned is the number of
         * frames the sprite has been overlapping with the target.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         * @return {Number} frames
         */
        overlapping(target: Sprite | Group, callback?: Function): number;

        /**
         * Returns true on the first frame that the sprite no longer overlaps
         * with the target sprite or group.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         * @return {Boolean}
         */
        overlapped(target: Sprite | Group, callback?: Function): boolean;

        /**
         * This function is used automatically if a sprite overlap detection
         * function is called but the sprite has no overlap sensors.
         *
         * It creates sensor fixtures that are the same size as the sprite's
         * colliders. If you'd like to add more sensors to a sprite, use the
         * addSensor function.
         *
         */
        addDefaultSensors(): void;
    }

    class SpriteAnimation extends Array<any> {
        /**
         * <a href="https://p5play.org/learn/sprite_animation.html">
         * Look at the Animation reference pages before reading these docs.
         * </a>
         *
         * A SpriteAnimation object contains a series of images (p5.Image objects)
         * that can be displayed sequentially.
         *
         * A sprite can have multiple labeled animations, see Sprite.addAnimation
         * and Sprite.changeAnimation, but you can also create animations that
         * can be used without being added to a sprite first.
         *
         * The SpriteAnimation constructor can be used in multiple ways.
         * An animation can be created either from a list of images or sequentially
         * numbered images. p5play will try to detect the sequence pattern.
         *
         * For example if the image file path is "image1.png" and the last frame
         * index is 3 then "image2.png" and "image3.png" will be loaded as well.
         *
         * @param {...p5.Image} ...images - p5.Image objects to be used as frames
         * @example
         * let shapeShifter = new SpriteAnimation("dog.png", "cat.png", "snake.png");
         */
        constructor(...args: p5.Image[]);

        p: any;
        /**
         * The name of the animation
         *
         * @type {String}
         */
        name: string;
        /**
         * The index of the current frame that the animation is on.
         *
         * @type {Number}
         */
        frame: number;
        _cycles: number;
        targetFrame: number;
        /**
         * The offset is how far the animation should be placed from
         * the location it is played at.
         *
         * @type {Object}
         * @example
         * ani.offset.x = 16;
         */
        offset: any;
        _frameDelay: any;
        demoMode: any;
        /**
         * True if the animation is currently playing.
         *
         * @type {Boolean}
         * @default true
         */
        playing: boolean;
        /**
         * Animation visibility.
         *
         * @type {Boolean}
         * @default true
         */
        visible: boolean;
        /**
         * If set to false the animation will stop after reaching the last frame
         *
         * @type {Boolean}
         * @default true
         */
        looping: boolean;
        /**
         * Ends the loop on frame 0 instead of the last frame.
         * This is useful for animations that are symmetric.
         * For example a walking cycle where the first frame is the
         * same as the last frame.
         *
         * @type {Boolean}
         * @default false
         */
        endOnFirstFrame: boolean;
        /**
         * True if frame changed during the last draw cycle
         *
         * @type {Boolean}
         */
        frameChanged: boolean;
        onComplete: any;
        onChange: any;
        _onComplete: any;
        _onChange: any;
        rotation: any;
        _scale: any;
        spriteSheet: any;

        set frameDelay(arg: number);
        /**
         * Delay between frames in number of draw cycles.
         * If set to 4 the framerate of the animation would be the
         * sketch framerate divided by 4 (60fps = 15fps)
         *
         * @type {Number}
         * @default 4
         */
        get frameDelay(): number;

        set scale(arg: any);
        /**
         * TODO frameRate
         * Another way to set the animation's frame delay.
         */
        /**
         * The animation's scale.
         *
         * Can be set to a number to scale both x and y
         * or an object with x and/or y properties.
         *
         * @type {Number|Object}
         * @default 1
         */
        get scale(): any;

        /**
         * Make a copy of the animation.
         *
         * @return {SpriteAnimation} A copy of the animation.
         */
        clone(): SpriteAnimation;

        /**
         * Draws the animation at coordinate x and y.
         * Updates the frames automatically.
         *
         * Optional parameters effect the current draw cycle only and
         * are not saved between draw cycles.
         *
         * @param {Number} x horizontal position
         * @param {Number} y vertical position
         * @param {Number} [r] rotation
         * @param {Number} [sx] scale x
         * @param {Number} [sy] scale y
         */
        draw(x: number, y: number, r?: number, sx?: number, sy?: number): void;

        x: number;
        y: number;

        update(): void;

        /**
         * Plays the animation, starting from the specified frame.
         *
         * @returns [Promise] a promise that resolves when the animation completes
         */
        play(frame: any): any;

        /**
         * Pauses the animation.
         *
         */
        pause(frame: any): void;

        /**
         * Stops the animation. Alt for pause.
         *
         */
        stop(frame: any): void;

        /**
         * Plays the animation backwards.
         * Equivalent to ani.goToFrame(0)
         *
         * @returns [Promise] a promise that resolves when the animation completes
         * rewinding
         */
        rewind(): any;

        /**
         * Plays the animation forwards and loops it.
         *
         */
        loop(): void;

        /**
         * Prevents the animation from looping
         *
         */
        noLoop(): void;

        /**
         * Goes to the next frame and stops.
         *
         */
        nextFrame(): void;

        /**
         * Goes to the previous frame and stops.
         *
         */
        previousFrame(): void;

        /**
         * Plays the animation forward or backward toward a target frame.
         *
         * @param {Number} toFrame Frame number destination (starts from 0)
         * @returns [Promise] a promise that resolves when the animation completes
         */
        goToFrame(toFrame: number): any;

        /**
         * Returns the index of the last frame.
         *
         * @type {Number}
         * @readonly
         */
        get lastFrame(): number;

        /**
         * Returns the current frame as p5.Image.
         *
         * @type {p5.Image}
         * @readonly
         */
        get frameImage(): p5.Image;

        /**
         * Width of the animation.
         *
         * @type {Number}
         */
        get w(): number;

        /**
         * Width of the animation.
         *
         * @type {Number}
         */
        get width(): number;

        /**
         * Height of the animation.
         *
         * @type {Number}
         */
        get h(): number;

        /**
         * Height of the animation.
         *
         * @type {Number}
         */
        get height(): number;

        /**
         * The frames of the animation.
         *
         * @type {Array}
         */
        get frames(): any[];

        /**
         * The frames of the animation. Alt for ani.frames
         *
         * @type {Array}
         */
        get images(): any[];
    }

    class Group extends Array<any> {
        /**
         * <a href="https://p5play.org/learn/group.html">
         * Look at the Group reference pages before reading these docs.
         * </a>
         *
         * A Group is a collection of sprites with similar traits and behaviors.
         *
         * For example a group may contain all the coin sprites that the
         * player can collect.
         *
         * Group extends Array. You can use them in for loops just like arrays
         * since they inherit all the functions and properties of standard
         * arrays such as group.length and function like group.includes().
         *
         * Since groups just contain references to sprites, a sprite can be in
         * multiple groups.
         *
         * `sprite.remove()` removes the sprite from all the groups
         * it belongs to. `group.removeAll()` removes all the sprites from
         * a group.
         *
         * The top level group is a p5 instance level variable named
         * `allSprites` that contains all the sprites added to the sketch.
         */
        constructor(...args: any[]);

        p: any;
        /**
         * Each group has a unique id number. Don't change it!
         * Its useful for debugging.
         *
         * @type {Number}
         */
        idNum: number;
        _uid: number;
        _isAllSpritesGroup: boolean;
        /**
         * Groups can have subgroups, which inherit the properties
         * of their parent groups.
         *
         * @type {Array}
         * @default []
         */
        subgroups: any[];
        parent: any;
        /**
         * Keys are the animation label, values are SpriteAnimation objects.
         *
         * @type {SpriteAnimations}
         */
        animations: SpriteAnimations;
        /**
         * Contains all the collision callback functions for this group
         * when it comes in contact with other sprites or groups.
         */
        _collides: {};
        _colliding: {};
        _collided: {};
        _overlap: {};
        /**
         * Contains all the overlap callback functions for this group
         * when it comes in contact with other sprites or groups.
         */
        _overlaps: {};
        _overlapping: {};
        _overlapped: {};
        _collisions: {};
        _overlappers: {};
        Sprite: {
            new(...args: any[]): {};
        };
        GroupSprite: {
            new(...args: any[]): {};
        };
        Group: {
            new(...args: any[]): {};
        };
        Subgroup: {
            new(...args: any[]): {};
        };
        mouse: {
            presses: any;
            pressing: any;
            pressed: any;
            holds: any;
            holding: any;
            held: any;
            released: any;
            hovers: any;
            hovering: any;
            hovered: any;
        };
        vel: any;
        mirror: {};
        offset: {};
        scale: {};
        _orbitAngle: number;
        /**
         * autoCull is a property of the allSprites group only,
         * that controls whether sprites are automatically removed
         * when they are 10,000 pixels away from the camera.
         *
         * It only needs to be set to false once and then it will
         * remain false for the rest of the sketch, unless changed.
         *
         * @type {Boolean}
         */
        autoCull: boolean;
        tileSize: number;
        autoDraw: boolean;
        autoUpdate: boolean;
        /**
         * Alias for group.push
         *
         * Its better to use the group Sprite constructor instead.
         * `new group.Sprite()` which both creates a group sprite using
         * soft inheritance and adds it to the group.
         *
         * @memberof Group
         * @instance
         * @func add
         */
        add: (...sprites: Sprite) => number;
        /**
         * Check if a sprite is in the group.
         *
         * @memberof Group
         * @instance
         * @func includes
         * @param {Sprite} sprite
         * @return {Number} index of the sprite or -1 if not found
         */
        /**
         * Alias for group.includes
         */
        contains: any;
        /**
         * Returns the highest layer in a group
         *
         * @private
         * @return {Number} The layer of the sprite drawn on the top
         */
        private _getTopLayer;

        set ani(arg: SpriteAnimation);
        /**
         * Reference to the group's current animation.
         *
         * @type {SpriteAnimation}
         */
        get ani(): SpriteAnimation;

        set animation(arg: SpriteAnimation);
        /**
         * Reference to the group's current animation.
         *
         * @type {SpriteAnimation}
         */
        get animation(): SpriteAnimation;

        /**
         * The group's animations.
         *
         * @type {SpriteAnimations}
         */
        get anis(): SpriteAnimations;

        set img(arg: SpriteAnimation);
        /**
         * Reference to the group's current image.
         *
         * @type {SpriteAnimation}
         */
        get img(): SpriteAnimation;

        set image(arg: SpriteAnimation);
        /**
         * Reference to the group's current image.
         *
         * @type {SpriteAnimation}
         */
        get image(): SpriteAnimation;

        /**
         * Depending on the value that the amount property is set to, the group will
         * either add or remove sprites.
         *
         * @type {Number}
         */
        set amount(arg: any);

        resetCentroid(): {
            x: number;
            y: number;
        };

        centroid: {
            x: number;
            y: number;
        };

        resetDistancesFromCentroid(): void;

        snap(o: any, dist: any): void;

        _ensureCollide(target: any, callback: any): void;

        collide(target: any, callback: any): boolean;

        /**
         * Returns true on the first frame that the group collides with the
         * target sprite or group.
         *
         * Custom collision event handling can be done by using this function
         * in an if statement or adding a callback as the second parameter.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         */
        collides(target: Sprite | Group, callback?: Function): boolean;

        /**
         * Returns a truthy value while the group is colliding with the
         * target sprite or group. The value is the number of frames that
         * the group has been colliding with the target.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         * @return {Number} frames
         */
        colliding(target: Sprite | Group, callback?: Function): number;

        /**
         * Returns true on the first frame that the group no longer overlaps
         * with the target sprite or group.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         * @return {Boolean}
         */
        collided(target: Sprite | Group, callback?: Function): boolean;

        _removeContactsWith(o: any): void;

        _ensureOverlap(target: any, callback: any): void;

        _hasSensors: boolean;

        overlap(target: any, callback: any): boolean;

        /**
         * Returns true on the first frame that the group overlaps with the
         * target sprite or group.
         *
         * Custom overlap event handling can be done by using this function
         * in an if statement or adding a callback as the second parameter.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         */
        overlaps(target: Sprite | Group, callback?: Function): boolean;

        /**
         * Returns a truthy value while the group is overlapping with the
         * target sprite or group. The value returned is the number of
         * frames the group has been overlapping with the target.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         * @return {Number} frames
         */
        overlapping(target: Sprite | Group, callback?: Function): number;

        /**
         * Returns true on the first frame that the group no longer overlaps
         * with the target sprite or group.
         *
         * @param {Sprite|Group} target
         * @param {Function} [callback]
         * @return {Boolean}
         */
        overlapped(target: Sprite | Group, callback?: Function): boolean;

        /**
         * Apply a force that is scaled to the sprite's mass.
         *
         * @param {p5.Vector|Array} forceVector force vector
         * @param {p5.Vector|Array} [forceOrigin] force origin
         */
        applyForce(forceVector: p5.Vector | any[], forceOrigin?: p5.Vector | any[]): void;

        /**
         */
        move(distance: any, direction: any, speed: any): any;

        /**
         */
        moveTo(x: any, y: any, speed: any): any;

        /**
         */
        moveTowards(x: any, y: any, tracking: any): void;

        /**
         */
        moveAway(x: any, y: any, tracking: any): void;

        /**
         * EXPERIMENTAL! Subject to change in the future!
         *
         * Rotates the group around its centroid.
         *
         * @param {Number} amount Amount of rotation
         */
        orbit(amount: number): void;

        /**
         * Gets the member at index i.
         *
         * @deprecated get
         * @param {Number} i The index of the object to retrieve
         */
        get(i: number): any;

        /**
         * Alias for group.length
         * @deprecated
         */
        size(): number;

        /**
         * Remove sprites that go outside the given culling boundary
         * relative to the camera.
         *
         * @param {Number} top|size The distance that sprites can move below the p5.js canvas before they are removed. *OR* The distance sprites can travel outside the screen on all sides before they get removed.
         * @param {Number} bottom|cb The distance that sprites can move below the p5.js canvas before they are removed.
         * @param {Number} [left] The distance that sprites can move beyond the left side of the p5.js canvas before they are removed.
         * @param {Number} [right] The distance that sprites can move beyond the right side of the p5.js canvas before they are removed.
         * @param {Function} [cb(sprite)] The callback is given the sprite that
         * passed the cull boundary, if no callback is given the sprite is
         * removed by default
         * @return {Number} The number of sprites culled
         */
        cull(top: number, bottom: number, left?: number, right?: number, cb?: Function): number;

        /**
         * If no input is given all sprites in the group are removed.
         *
         * If a sprite or index is given, that sprite is removed from the
         * group, but not from the sketch or any other groups it may be in.
         *
         * @param {Sprite} item The sprite to be removed
         * @return {Sprite} the removed sprite
         */
        remove(item: Sprite): Sprite;

        /**
         * Removes all sprites from the group and destroys the group.
         *
         */
        removeAll(): void;

        /**
         * Draws all the sprites in the group.
         *
         */
        draw(): void;

        _autoDraw: any;

        /**
         * Updates all the sprites in the group. See sprite.update for
         * more information.
         *
         * By default, allSprites.update is called after every draw call.
         *
         */
        update(): void;

        _autoUpdate: any;
    }

    class World extends Plank.World {
        p: any;
        _offset: {
            x: number;
            y: number;
        };
        offset: {
            x: number;
            y: number;
        };
        contacts: any[];
        /**
         * Gravity force that affects all dynamic physics colliders.
         *
         * @type.x
         */
        /**
         * Gravity force that affects all dynamic physics colliders.
         *
         * @type.y
         */
        gravity: unknown
    .
        y;

        set velocityThreshold(arg: number);
        /**
         * The lowest velocity an object can have before it is considered
         * to be at rest.
         *
         * Adjust the velocity threshold to allow for slow moving objects
         * but don't have it be too low, or else objects will never sleep.
         *
         * @type {number}
         * @default 0.19
         */
        get velocityThreshold(): number;

        mouseSprite: any;
        mouseSprites: any[];
        autoStep: boolean;
        _velocityThreshold: number;
        /**
         * Resizes the world to the given width and height. Used when
         * the canvas is created or resized.
         *
         * @private
         */
        private resize;
        origin: {
            x: number;
            y: number;
        };
        hw: number;
        hh: number;

        /**
         * Performs a physics simulation step that advances all sprites'
         * forward in time by 1/60th of a second if no timeStep is given.
         *
         * This function is automatically called at the end of the p5.js draw
         * loop, unless it was already called inside the draw loop.
         *
         * @param {Number} timeStep - time step in seconds
         * @param {Number} velocityIterations
         * @param {Number} positionIterations
         */
        step(timeStep: number, velocityIterations: number, positionIterations: number): void;

        /**
         * Returns the sprites at a position.
         *
         * @param {Number} x
         * @param {Number} y
         * @returns {Array} an array of sprites
         */
        getSpritesAt(x: number, y: number, group: any, cameraActiveWhenDrawn: any): any[];

        /**
         * Returns the sprite at the top most layer position where
         * the mouse click occurs
         *
         * @param {Number} x
         * @param {Number} y
         * @returns {Sprite} a sprite
         */
        getSpriteAt(x: number, y: number, group: any): Sprite;

        _beginContact(contact: any): void;

        _endContact(contact: any): void;

        /**
         * Used internally to find a contact callback between two sprites.
         *
         * @private
         * @param {String} type "collide" or "overlap"
         * @param {Sprite} s0
         * @param {Sprite} s1
         * @returns contact cb if one can be found between the two sprites
         */
        private _findContactCB;

        set allowSleeping(arg: boolean);
        /**
         * "Sleeping" sprites get temporarily ignored during physics
         * simulation. A sprite starts "sleeping" when it stops moving and
         * doesn't collide with anything that it wasn't already touching.
         *
         * This is a performance optimization that can be disabled for
         * every sprite in the world.
         *
         * @type {Boolean}
         * @default true
         */
        get allowSleeping(): boolean;
    }

    class Camera {
        /**
         * <a href="https://p5play.org/learn/camera.html">
         * Look at the Camera reference pages before reading these docs.
         * </a>
         *
         * A `camera` object is created automatically when p5play loads.
         * Currently, there can only be one camera per p5.js instance.
         *
         * A camera facilitates scrolling and zooming for scenes extending beyond
         * the canvas. A camera has a position, a zoom factor, and the mouse
         * coordinates relative to the view.
         * The camera is automatically created on the first draw cycle.
         *
         * In p5.js terms the camera wraps the whole drawing cycle in a
         * transformation matrix but it can be disable anytime during the draw
         * cycle for example to draw interface elements in an absolute position.
         *
         * @param {Number} x Initial x coordinate
         * @param {Number} y Initial y coordinate
         * @param {Number} zoom magnification
         */
        constructor(x: number, y: number, zoom: number);

        p: any;
        _pos: {
            x: number;
            y: number;
        };
        __pos: {
            x: number;
            y: number;
        };
        /**
         * Get the translated mouse position relative to the camera view.
         * Offsetting and scaling the canvas will not change the sprites' position
         * nor the mouseX and mouseY variables. Use this property to read the mouse
         * position if the camera moved or zoomed.
         *
         * @type {Object}
         */
        mouse: any;
        /**
         * @type.x {Number}
         */
        /**
         * @type.y {Number}
         */
        /**
         * True if the camera is active.
         * Read only property. Use the methods Camera.on() and Camera.off()
         * to enable or disable the camera.
         *
         * @type {Boolean}
         * @default false
         */
        active: boolean;
        bound: {
            min: {
                x: number;
                y: number;
            };
            max: {
                x: number;
                y: number;
            };
        };
        _zoomIdx: number;
        _zoom: number;

        set x(arg: number);
        /**
         * The camera x position.
         *
         * @type {Number}
         */
        get x(): number;

        set y(arg: number);
        /**
         * The camera y position.
         *
         * @type {Number}
         */
        get y(): number;

        /**
         * The camera's position. {x, y}
         *
         * @type {Object}
         */
        get pos(): any;

        /**
         * The camera's position. Alias for pos.
         *
         * @type {Object}
         */
        get position(): any;

        set zoom(arg: number);
        /**
         * Camera zoom.
         *
         * A scale of 1 will be the normal size. Setting it to 2 will
         * make everything twice the size. .5 will make everything half
         * size.
         *
         * @type {Number}
         * @default 1
         */
        get zoom(): number;

        /**
         * Zoom the camera at a given speed.
         *
         * @param {Number} target The target zoom.
         * @param {Number} speed The amount of zoom per frame.
         * @returns {Promise} A promise that resolves when the camera reaches the target zoom.
         */
        zoomTo(target: number, speed: number): Promise<any>;

        /**
         * Activates the camera.
         * The canvas will be drawn according to the camera position and scale until
         * camera.off() is called
         *
         */
        on(): void;

        /**
         * Deactivates the camera.
         * The canvas will be drawn normally, ignoring the camera's position
         * and scale until camera.on() is called
         *
         */
        off(): void;
    }

    class Tiles {
        /**
         * <a href="https://p5play.org/learn/tiles.html">
         * Look at the Tiles reference pages before reading these docs.
         * </a>
         *
         * @param {String} tiles
         * @param {Number} x
         * @param {Number} y
         * @param {Number} w
         * @param {Number} h
         */
        constructor(tiles: string, x: number, y: number, w: number, h: number);
    }

    class InputDevice {
        /**
         * The amount of frames an input must be pressed to be considered held.
         * Default is 12.
         *
         * @type {number}
         */
        holdThreshold: number;
        /**
         * Initializes the input's values to zero.
         *
         * @private
         */
        private init;
        /**
         * Attempt to auto-correct the user's input. Inheriting classes
         * override this method.
         *
         * @private
         */
        private ac;

        /**
         * @param {string} inp
         * @returns {boolean} true on the first frame that the user presses the input
         */
        presses(inp: string): boolean;

        /**
         * @param {string} inp
         * @returns {number} the amount of frames the user has been pressing the input
         */
        pressing(inp: string): number;

        /**
         * @param {string} inp
         * @returns {boolean} true on the first frame that the user released the input
         */
        pressed(inp: string): boolean;

        /**
         * @param {string} inp
         * @returns {boolean} true on the first frame that the user holds the input
         */
        holds(inp: string): boolean;

        /**
         * @param {string} inp
         * @returns {number} the amount of frames the user has been holding the input
         */
        holding(inp: string): number;

        /**
         * @param {string} inp
         * @returns {boolean} true on the first frame that the user released a held input
         */
        held(inp: string): boolean;

        /**
         * @param {string} inp
         * @returns {boolean} true on the first frame that the user released the input
         */
        released(inp: string): boolean;

        releases(inp: any): boolean;
    }

    interface p5InstanceExtensions {

        Sprite: typeof Sprite
        SpriteAnimation: typeof SpriteAnimation
        Group: typeof Group
        World: typeof World
        Camera: typeof Camera
        Tiles: typeof Tiles
        InputDevice: typeof InputDevice

        createTiles(tiles: any, x: any, y: any, w: any, h: any): {};

        updateSprites(...args: any[]): void;

        colorPal(c: string, palette: any): any;

        spriteArt(txt: string, scale: number, palette: any): any;

        drawSprite(sprite: any): void;

        drawSprites(group: any): void;

        createSprite(...args: any[]): Sprite;

        createGroup(...args: any[]): Group;

        loadAni(...args: any[]): SpriteAnimation;

        loadAnimation(...args: any[]): SpriteAnimation;

        animation(ani: SpriteAnimation, x: number, y: number, r: number, sX: number, sY: number): void;

        delay(millisecond: number): Promise<any>;

        sleep(millisecond: any): any;

        play(sound: p5.Sound): Promise<any>;

        createCanvas(...args: any[]): any;

        Canvas(...args: any[]): any;

        background(...args: any[]): void;

        fill(...args: any[]): void;

        stroke(...args: any[]): void;

        loadImg(...args: any[]): any;

        loadImage(...args: any[]): any;

        keyIsDown(keyCode: any): never;

        getFPS(): number;

        loadAds(provider: any, opt: any): void;

        showAd(type: any): void;

        allSprites: Group;
        world: World;
        camera: Camera;
        mouse: Mouse;
        kb: KeyBoard;
        keyboard: KeyBoard;
        contro: Contros;
        controllers: Contros;

    }
}
