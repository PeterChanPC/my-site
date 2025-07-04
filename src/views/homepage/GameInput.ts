import * as THREE from 'three';

export default class GameInput {
  isMouse: boolean;
  pointerPos: THREE.Vector3;
  moveDir: THREE.Vector2;
  moveUp: boolean;
  moveDown: boolean;
  moveLeft: boolean;
  moveRight: boolean;

  constructor() {
    this.isMouse = false;
    this.pointerPos = new THREE.Vector3(0, 0, 0);
    this.moveDir = new THREE.Vector2(0, 0);
    this.moveUp = false;
    this.moveDown = false;
    this.moveLeft = false;
    this.moveRight = false;
  }

  handleMovementVector() {
    if (this.moveUp) {
      this.moveDir.y = -1;
      if (this.moveDown) this.moveDir.y = 0;
    } else if (this.moveDown) {
      this.moveDir.y = 1;
      if (this.moveUp) this.moveDir.y = 0;
    } else {
      this.moveDir.y = 0;
    };
    if (this.moveLeft) {
      this.moveDir.x = -1;
      if (this.moveRight) this.moveDir.x = 0;
    } else if (this.moveRight) {
      this.moveDir.x = 1;
      if (this.moveLeft) this.moveDir.x = 0;
    } else {
      this.moveDir.x = 0;
    };
  }

  handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveUp = true;
        break;
      case 'ArrowDown':
        this.moveDown = true;
        break;
      case 'ArrowLeft':
        this.moveLeft = true;
        break;
      case 'ArrowRight':
        this.moveRight = true;
        break;
    };
    this.handleMovementVector();
  }

  handleKeyUp(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveUp = false;
        break;
      case 'ArrowDown':
        this.moveDown = true;
        break;
      case 'ArrowLeft':
        this.moveLeft = true;
        break;
      case 'ArrowRight':
        this.moveRight = true;
        break;
    };
    this.handleMovementVector();
  }

  addInputListener(): void {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  removeInputListener(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  getMovementVectorNormalized() {
    return this.moveDir.clone().normalize();
  }
}