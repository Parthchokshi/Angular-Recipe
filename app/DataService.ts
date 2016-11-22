/**
 * Created by Parthchokshi on 7/21/2016.
 */
export class DataService{
  private data: number[] = [];

  addData(input: number){
    this.data.push(input);
  }

  getData(): number[]{
    return this.data;
  }
}
