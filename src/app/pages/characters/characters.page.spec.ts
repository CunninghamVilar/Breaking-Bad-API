import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { charactersPage } from './characters.page';

describe('CharactersPage', () => {
  let component: charactersPage;
  let fixture: ComponentFixture<charactersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ charactersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(charactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
