import { HomeComponent } from './home-integration/home.component';
import { TodosComponent } from './08-todos-integration-dependecies/todos.component';
import { UsersComponent } from './users-integration/users.component';
import { UserDetailsComponent } from './09-user-details-integration/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent }
];
