namespace Subjects {
  export class Subject {
    private _teacher?: Teacher;

    public setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }

    public get teacher(): Teacher | undefined {
      return this._teacher;
    }
  }
}
