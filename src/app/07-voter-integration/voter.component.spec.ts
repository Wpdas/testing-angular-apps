import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    // Used to overwrite the module props (same body as any module.ts) ex: app.module.ts line 9
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });
    // .compileComponents(); it will compile the entire component including the styles and everything else.
    // will run also the filesystem files (all the node files), this is the reason it will run in asynchronous mode
    // it's slow.
    // Since this is using webpack nowadays, we don't need to call this method, webpack compile all the files in a unique
    // bundled file.

    // It's just an Fixture, wrapper, that return as if it was an copy rendered of our component (template)
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance; // Get the instance of our wrapped component
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges(); // After changing values into component, we need explicity call this method to
    // say to Angular that it needs to be updated.

    // When I want to get an value from a html tag > class > value
    // This will get all html elements since the root.
    let debugElement = fixture.debugElement.query(By.css('.vote-count')); // de = debug element
    let element: HTMLElement = debugElement.nativeElement; // gets the html element

    expect(element.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    // set the class highlight to the html element
    component.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(debugElement.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when I click the upvote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null); // simulates click on the button

    expect(component.totalVotes).toBe(1);
  });
});
