import { Component, OnInit } from '@angular/core';
import {
  NgWizardService,
  StepChangedArgs,
  StepValidationArgs,
  STEP_STATE,
  THEME,
  NgWizardConfig,
} from 'ng-wizard';
import { of } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { PostsService } from '../../../../core/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styles: [],
})
export class CreatePostComponent implements OnInit {
  get user() {
    return { ...this._authService._user };
  }

  title: string = 'Crear publicación';
  image: string = '/assets/img/bg/breadcrumb_bg.jpg';
  images: File[] = [];
  imagess: File | undefined;

  miFormulario: FormGroup = this.fb.group({
    users_id: [this._authService._user.id],
    post_types_id: [1],
    communes_id: [284],
    status: [false],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    address: ['', [Validators.required]],
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    race: ['', [Validators.required]],
    age: [2, [Validators.required]],
    sex: ['', [Validators.required]],
    size: ['', [Validators.required]],
    story: ['', [Validators.required]],
    character: ['', [Validators.required]],
    social: ['', [Validators.required]],
    energy: ['', [Validators.required]],
    friendship: ['', [Validators.required]],
    images: ['', [Validators.required]],
  });

  post = {
    users_id: 8,
    post_types_id: 1,
    communes_id: 8,
    status: false,
    title: 'probando',
    description: 'probandoasdasdsadsadsadsadasdsadasdsa',
    address: 'probando',
    pet: {
      name: 'probando',
      type: 'probando',
      race: 'probando',
      age: 'probando',
      sex: 'probando',
      size: 'probando',
      story: 'probando',
      character: 'probando',
      social: 'probando',
      energy: 'probando',
      friendship: 'probando',
      images: [this.images[0], this.images[0]],
    },
  };

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden,
  };

  constructor(
    private ngWizardService: NgWizardService,
    private fb: FormBuilder,
    private _authService: AuthService,
    private _postsService: PostsService
  ) {}

  ngOnInit() {}

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.dots,
  };

  register() {
    const formData = new FormData();
    formData.append('users_id', this.post.users_id.toString());
    formData.append('post_types_id', this.post.post_types_id.toString());
    formData.append('communes_id', this.post.communes_id.toString());
    formData.append('status', this.post.status.toString());
    formData.append('title', this.post.title);
    formData.append('description', this.post.description);
    formData.append('address', this.post.address);
    formData.append('name', this.post.pet.name);
    formData.append('type', this.post.pet.type);
    formData.append('race', this.post.pet.race);
    formData.append('age', this.post.pet.age);
    formData.append('sex', this.post.pet.sex);
    formData.append('size', this.post.pet.race);
    formData.append('story', this.post.pet.race);
    formData.append('character', this.post.pet.race);
    formData.append('social', this.post.pet.race);
    formData.append('energy', this.post.pet.race);
    formData.append('friendship', this.post.pet.race);
    formData.append('images', this.images[0]);
    
    
    this._postsService.create(this.post).subscribe((data) => {
      console.log(data);
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images.push(file);

      console.log(this.images);
    }
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
}
