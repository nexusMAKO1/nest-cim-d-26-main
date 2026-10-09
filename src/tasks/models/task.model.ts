export class Task {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public createdAt: Date,
  ) {}
}
// export class Task {
//   public id: number;
//   public title: string;
//   public description: string;
//   public createdAt: Date;

//   constructor(id: number, title: string, description: string, createdAt: Date) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.createdAt = createdAt;
//   }
// }
