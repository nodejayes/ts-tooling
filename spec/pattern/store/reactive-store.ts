import {BehaviorSubject} from 'rxjs';
import {List} from "../../../src/collections/list";

export class ReactiveStore<T> {
    private _core = {};
    private _behaviorSubjects = new List<BehaviorSubject<any>>();

    select<K>(selector: (d: T) => K): BehaviorSubject<K> {
        const subject = new BehaviorSubject<K>(selector(this._core));
        this._behaviorSubjects.Add(subject);
        return subject;
    }

    mutate<K>(selector: (d: T) => K): void {

    }
}